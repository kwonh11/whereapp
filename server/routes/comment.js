const qs = require('qs');
const axios = require('axios');
require("dotenv").config();
// news router
const express = require("express");
const router = express.Router();
const Comment = require("../schemas/comment");
const { isLoggedIn } = require('./middlewares');

// 댓글 목록
router.get("/:contentId", async (req, res) => {
  try {
    const contentId = req.params.contentId;
    const totalComments = await Comment.countDocuments({});
    const list = await Comment.find({ contentId: contentId }).sort({createAt: -1}).limit(totalComments);
    console.log(list);
    res.json(list);
  } catch (err) {
    // 에러처리코드에 맞게 구현
    console.log(err);
  }
});

// 댓글 등록
router.post("/", async (req, res) => {
  const { contentId, commenter, content } = req.body;
  console.log(`등록 : ${contentId, commenter, content}`);
  try {
    const newComment = await new Comment({
      name,
      contentId,
      commenter,
      content
    })
    await newComment.save();

    res.status(200).end();
  } catch (err) {
    console.log(err);
  }

});

// 댓글 수정
router.patch("/", isLoggedIn, async (req, res) => {
  try {
    const { contentId, commenter, content } = req.body;
    await Comment.findOneAndUpdate({
      contentId,
      commenter
    }, {
      content: content
    })
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

// 댓글 삭제
router.delete("/", isLoggedIn, async (req, res) => {
  try {
    const { contentId, commenter } = req.body;
    await Comment.findOneAndDelete({
      contentId,
      commenter
    });
    res.status(200).end();
  } catch (err) {
    console.log(err);
  } 
});



module.exports = router;
