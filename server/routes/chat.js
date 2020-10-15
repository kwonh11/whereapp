const express = require("express");
const fs = require("fs");
const multer = require("multer");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const path = require("path");
const Chat = require("../schemas/chat");

const router = express.Router();

router.post("/", async (req, res) => {
  const { input } = req.body;

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
  const chats = await Chat.find({}).sort("createdAt");

  res.json({ chats, user: req.session.color });
});

module.exports = router;
