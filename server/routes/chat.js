const express = require("express");
const fs = require("fs");
const multer = require("multer");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const path = require("path");
const Chat = require("../schemas/chat");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("========post");
  const { input } = req.body;
  console.log(req.body);

  console.log(input);

  try {
    const chat = await Chat.create({
      user: req.session.color,
      chat: input,
    });

    req.app.get("io").emit("chat", chat);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  const chatList = await Chat.find({}).sort("createdAt");

  res.json({ chatList, user: req.session.color });
});

module.exports = router;
