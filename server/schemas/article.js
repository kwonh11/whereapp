const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: String,
  content: {
    type: String,
    require: true,
  },
  corp: {
    type: String,
    require: true,
  },
  subscriber: {
    type: ObjectId,
    ref: "User",
  },
  published: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", articleSchema);
