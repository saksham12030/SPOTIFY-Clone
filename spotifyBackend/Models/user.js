const mongoose=require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please Enter your Firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Please Enter your Lastname"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please Enter your Username"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your Password"],
  },
  likedsong: {
    type: String,
    required: false,
  },
  likedplaylist: {
    type: String,
    required: false,
  },
  subscribedArtist: {
    type: String,
    required: false,
  },
});
module.exports=mongoose.model("user",userSchema);