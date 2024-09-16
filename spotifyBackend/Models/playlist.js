const mongoose = require("mongoose");
const user=require("./user")
const song=require("./song")
const playlistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "song",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});
module.exports = mongoose.model("playlist", playlistSchema);
