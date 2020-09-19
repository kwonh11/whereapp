const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  article: {
    type: ObjectId,
    ref: "Article",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
