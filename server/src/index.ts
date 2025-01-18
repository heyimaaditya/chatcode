import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is not defined.");
}
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("Database connected"))
.catch((e)=>console.log(e));
mongoose.connection.on("error",(err)=>{
    console.log(`DB connection error:${err.message}`);

});
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})
