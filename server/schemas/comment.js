const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const ReplySchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  commenter: {
    type: ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const CommentSchema = new Schema({
  contentId: {
    type: String,
    require: true,
  },
  nick: {
    type: String,
  },
  commenter: {
    type: ObjectId,
    ref: "User",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    require: true,
  },
  like: {
    type: Number,
    default: 0
  },
  reply: {
    type: [ReplySchema],
    default: []
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
