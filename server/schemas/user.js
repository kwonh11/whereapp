const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const userSchema = new Schema({
  snsId: {
    type: String,
    require: true,
    unique: true,
  },
  nick: {
    type: String,
    require: true,
  },
  image: String,
  provider: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
