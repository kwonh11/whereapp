const express = require("express");
const passport = require("passport");
const fs = require("fs");
const multer = require("multer");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const path = require("path");
const User = require("../schemas/user");
const Comment = require("../schemas/comment");
const Heart = require("../schemas/heart");

const router = express.Router();

router.get("/checkUser", async (req, res, next) => {
  res.json(req.user || null);
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

router.patch("/heart", isLoggedIn, async (req, res) => {
  const { place } = req.body;
  try {
    const exHeart = await Heart.findOne({ user: req.user.id, place });
    if (exHeart) {
      await Heart.remove(exHeart);
      res.end();
    } else {
      await Heart.create({ user: req.user.id, place });
      res.status(201).end();
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/heart", isLoggedIn, async (req, res) => {
  try {
    const hearts = await Heart.find({ user: req.user.id }, "place").populate(
      "place"
    );
    res.json(hearts.map((heart) => heart.place));
  } catch (error) {
    console.error(error);
  }
});

router.get("/comment", isLoggedIn, async (req, res) => {
  try {
    const comments = await Comment.find(
      { commenter: req.user.id },
      "place"
    ).populate("place");

    res.json(comments.map((comment) => comment.place));
  } catch (error) {
    console.error(error);
  }
});

router.get("/comments", isLoggedIn, (req, res) => {
  const test = Comment.find({ commenter: req.user.id });
});

module.exports = router;
