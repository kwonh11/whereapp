const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const ReplySchema = new Schema({
  nick: {
    type: String,
    require: true,
  },
  commenter: {
    type: ObjectId,
    ref: "User",
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentSchema = new Schema({
  contentId: {
    type: String,
    require: true,
  },
  place: {
    type: ObjectId,
    ref: "Place",
    require: true,
  },
  nick: {
    type: String,
    require: true,
  },
  commenter: {
    type: ObjectId,
    ref: "User",
    require: true,
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
    type: [{type: ObjectId, ref: "User"}],
    default: [],
  },
  reply: {
    type: [ReplySchema],
    default: [],
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
