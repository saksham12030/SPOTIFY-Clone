const mongoose=require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  username: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
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