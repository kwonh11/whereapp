const mongoose = require("mongoose");

const { Schema } = mongoose;

const placeSchema = new Schema({
  contentid: {
    type: Number,
    require: true,
    unique: true,
  },
  contenttypeid: {
    type: Number,
    require: true,
  },
  firstimage: String,
  title: String,
  addr1: String,
  addr2: String,
  readcount: Number,
  tel: String,
  dist: Number,
});

module.exports = mongoose.model("Place", placeSchema);
