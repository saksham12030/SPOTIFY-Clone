const router = require("express").Router();
const passport = require("passport");
const song = require("../Models/song");
const user=require("../Models/user")
router.post("/create",passport.authenticate("jwt", { session: false }),async (req, res) => {
    const { name, thumbnail, track } = req.body;

    if (!name || !thumbnail || !track) {
      return res.status(400).json({ err: "insufficient details to create song" });
    }
    const createdsong = await song.create({
      name,
      thumbnail,
      track,
      artist: req.user._id,
    });
    console.log(createdsong.artist)
    return res.status(200).json(createdsong);
  }
);

router.get("/get/mysongs",passport.authenticate("jwt", { session: false }),async (req, res) => {
  const currentuser_id=req.user._id;
  const songs = await song.find({ artist: currentuser_id }).populate("artist");
  return res.status(200).json({ song: songs });
});

router.get("/get/artist/:artistid",passport.authenticate("jwt",{session:false}),async(req,res)=>{
  const {artistid}=req.params;
  const artist=await user.find({_id:artistid});
  if(!artist){
    return res.status(400).json({err:"Artist Not Found"})
  }
  const songs=await song.find({artist:artistid});
  return res.status(200).json({data:songs});

})

router.get("/get/songname/:songname",passport.authenticate("jwt",{session:false}),async(req,res)=>{
  const {songname}=req.params;
  const songss=await song.find({name:songname}).populate("artist")
  return res.status(200).json({data:songss});

})
module.exports=router;
