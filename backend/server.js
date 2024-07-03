import express from "express";
import userRoute from "./Routes/user.route.js";
import exploreRoute from "./Routes/explore.route.js";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'


const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("server started");
})

app.use('/api/users',userRoute);
app.use('/api/explore',exploreRoute)

app.listen(5000,()=>{
    console.log("server started at 5000");
})