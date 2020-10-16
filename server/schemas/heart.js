const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const heartSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  place: {
    type: ObjectId,
    ref: "Place",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Heart", heartSchema);
