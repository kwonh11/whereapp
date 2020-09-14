const express = require("express");
const passport = require("passport");
const cors = require("cors");
const User = require("../schemas/user");

const router = express.Router();

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "http://localhost:9000/",
  }),
  (req, res) => {
    res.redirect("http://localhost:9000/");
  }
);

module.exports = router;
