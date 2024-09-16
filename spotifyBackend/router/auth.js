const router=require("express").Router();
const user=require("../Models/user");
const bcrypt = require("bcrypt");
const {getToken}=require("../utils/helper");

router.post("/register",async (req,res)=>{
    const {firstname,lastname,email,username,password}=req.body;
    const users=await user.findOne({email});
    if(users){
        return res.status(400).json({error:"User already exists"});
    }
    let hashpassword=await bcrypt.hash(password,10); 
    const newusers = await user.create({
      firstname,
      lastname,
      email,
      username,
      password: hashpassword,
    });
    const token=getToken(email,newusers);
    const usertoreturn={...newusers.toJSON(),token};
    delete usertoreturn.password; 
    return res.status("200").send(usertoreturn);
})  

router.post("/login",async (req,res)=>{

    const {email,password}=req.body;
    try{
        const users = await user.findOne({ email });
       
        if (!users) {
          return res.status(400).json({ error: "User Not found" });
        }
        const ispassword = await bcrypt.compare(password, users.password);
        // console.log(ispassword);
        if (!ispassword) {
          return res.status(400).json({ error: "Invalid Credentials" });
        } else {
          const token = getToken(users.email, users);
          const usertoreturn = { ...users.toJSON(), token };
          console.log(usertoreturn._id);
          console.log(token);
          delete usertoreturn.password;
          return res.status(200).json(usertoreturn);
        }
      }catch(err){
        res.status(400).json({err:"Error found"})
      }
      
    
})
module.exports=router;

//66a4b4131098a6d5b779a57a
// 66a4b51b3b7a287082cf6e72