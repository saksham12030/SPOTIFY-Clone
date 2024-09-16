const express=require("express");
const app=express();
const passport=require("passport");
const mongoose=require("mongoose");
const user=require("./Models/user");
const song=require("./Models/song");
const playlist=require("./Models/playlist");
const auth=require("./router/auth")
const songs=require("./router/songs");
const playlists=require("./router/playlists")
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
mongoose
  .connect(
    `mongodb+srv://saksham776:${process.env.password}@cluster0.5bjbxvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      serverSelectionTimeoutMS: 30000,
    }
  )
  .then(console.log("mongoose connected"));

let JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      const users = await user.findOne({_id: jwt_payload._id });
      if (users) {
        return done(null, users);
      } else {
        return done(null, false);
      }
      } catch (err) {
        return done(err, false)
      }
        })
      );

app.use("/auth", auth);
app.use("/songs", songs);
app.use("/playlist", playlists);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8080,(req,res)=>{
    console.log("Connected");
})