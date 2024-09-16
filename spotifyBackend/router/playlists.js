const router = require("express").Router();
const passport = require("passport");
const song = require("../Models/song");
const playlist = require("../Models/playlist");
const user=require("../Models/user");

router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const current_user=req.user;
    const {name,thumbnail,songs}=req.body;
    if(!name|| !thumbnail|| !songs){
        return res.status(400).json(" Insufficiant Data");
    }
    const createdplaylist = await playlist.create({
      name,
      thumbnail,
      songs,
      owner: current_user._id,
      collaborators:[],
    });
    return res.status(200).json(createdplaylist);
})

router.get("/get/playlists/me",passport.authenticate("jwt", { session: false }),async (req, res) => {
      const artistid = req.user;
      console.log(artistid) // This should be an ObjectId
      const playlists = await playlist.find({ owner: artistid }).populate("owner");
     return res.status(200).json({ data: playlists });
  }
);

router.get("/get/:playlist_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const playlistid=req.params.playlist_id;
    const playlists=await playlist.findOne({_id:playlistid}).populate({
        path:"songs",
        populate:{
            path:"artist"
        }
    });
    if(!playlists){
        return res.status(400).json("Playlist Not exists");
    }
    console.log(playlists);
    return res.status(200).json(playlists);
})


router.get("/artist/:artist_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistid=req.params.artist_id;
    const artist=user.findOne({_id:artistid})
    if(!artist){
        return res.status(400).json({err:"Invalid artist"})
    }
    const playlists=await playlist.find({owner:artistid});
    return res.status(200).json({data:playlists});
})

router.post("/add/song",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentuser=req.user;
    const {songid,playlistid}=req.body;
    const playlists=await playlist.findOne({_id:playlistid});
    if (!playlists) {
      return res.status(400).json("Playlist not exist");
    }
    if (
        !playlists.owner.equals(currentuser._id) && 
        !playlists.collaborators.includes(currentuser._id)
    ) {
      return res.status(400).json({err:"Not allowed"});
    }

    const songss=await song.findOne({_id:songid});
    if(!songss){
        return res.status(400).json("song not found");
    }
    console.log(playlist.song);

    playlists.songs.push(songid);
    await playlists.save();
   return  res.status(200).json(playlists);
});
module.exports=router;