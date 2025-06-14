const express = require('express');
const mongoose=require('mongoose');
const cors= require('cors')
require('dotenv').config();


const app=express()
app.use(cors())
app.use(express.json())



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('mongo connected'));

const authRoutes=require('./routes/authRoutes');
const authenticate=require('./middleware/authMiddleware');

app.use('/api/auth',authRoutes);

app.get('/api/user',authenticate,(req,res)=>{
    res.json({message:`Hello, ${req.user.username}`})
});

app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))