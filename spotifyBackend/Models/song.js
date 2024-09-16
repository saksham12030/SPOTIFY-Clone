const mongoose = require("mongoose");
const user=require("./user.js");
const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("song", songSchema);
