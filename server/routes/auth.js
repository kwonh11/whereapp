const express = require("express");
const passport = require("passport");
const fs = require("fs");
const multer = require("multer");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../schemas/user");
const path = require("path");

const router = express.Router();

router.get("/checkUser", (req, res, next) => {
  res.json({
    user: req.user || null,
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/logout", isLoggedIn, (req, res) => {
  req.logOut();
  req.session.destroy();
  res.redirect("/");
});

fs.readdir("server/uploads", (error) => {
  if (error) {
    fs.mkdirSync("server/uploads");
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "server/uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});

router.patch("/img", isLoggedIn, upload.single("img"), async (req, res) => {
  await User.updateOne(
    { snsId: req.user.snsId },
    { image: `/img/${req.file.filename}` }
  );

  res.json({ url: `/img/${req.file.filename}` });
});

module.exports = router;
