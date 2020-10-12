const express = require("express");
const passport = require("passport");
const fs = require("fs");
const multer = require("multer");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const path = require("path");
const User = require("../schemas/user");
const Comment = require("../schemas/comment");

const router = express.Router();

router.get("/checkUser", async (req, res, next) => {
  console.log('--------------------checkUser');

  if (req.user) {
    console.log('유저있음')
    const comments = await Comment.find({ commenter: req.user.id }).populate('contentId')

    console.log(comments)
    //유저의 댓글을 가져온다
    //그 댓글의 contentId값으로 place스키마에서 데이터를 가져온다.
    
    res.json({
     info:req.user,
    } );
  } else {
    res.json( null);
  }
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

router.get('/comments', isLoggedIn, (req, res) => {
  console.log('--------------------');
  const test = Comment.find({ commenter: req.user.id })
  console.log(test)
})

module.exports = router;
