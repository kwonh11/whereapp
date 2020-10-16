const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const ChatSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  chat: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
