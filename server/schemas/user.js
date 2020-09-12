const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  provider: {
    type: String,
    require: true,
  },
  articles: {
    type: ObjectId,
    ref: "Article",
  },
  comments: {
    type: ObjectId,
    ref: "Comment",
  },
});

module.exports = mongoose.model("User", userSchema);
