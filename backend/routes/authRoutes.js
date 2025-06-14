const  express =require('express');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/User');


const router=express.Router();

router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    const hash=await bcrypt.hash(password,10)
    try{
        const user=new User({username,email,password:hash});
        await user.save();
        res.status(201).json({message:"User Created Successfully!"})
    }catch(err){
        res.status(400).json({error:"Email already exists"})
    }
})

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(!user)return res.status(400).json({error:"Invalid Credentials"})
   
 const isMatch=await bcrypt.compare(password, user.password);
 if(!isMatch) return res.status(401).json({error:'Invalid Credentials'})

    const token=jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1h'})
    res.json({token});
});


module.exports = router;