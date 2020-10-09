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
  const { contentId, commenter, content, nick } = req.body;
  console.log(`등록 : ${contentId} ${commenter} ${nick} ${content}`);
  try {
    const newComment = await new Comment({
      nick,
      contentId,
      commenter,
      content
    })
    await newComment.save();
    res.status(200);
  } catch (err) {
    console.log(err);
  }
  res.end();
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
router.delete("/:_id/:commenter", isLoggedIn, async (req, res) => {
  try {
    const { _id, commenter } = req.params;
    if (req.user._id == commenter) {
      // 사용자 일치, 삭제가능
      const result = await Comment.findOneAndDelete({
        _id,
      });
      console.log(result);
      res.status(200).end();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(403).send(err);
  } 
});



module.exports = router;
