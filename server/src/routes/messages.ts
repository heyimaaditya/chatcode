import express from "express";
import { createNewMessage,getMessages } from "src/controllers/messages";
const router=express.Router();
router.post("/messages",createNewMessage);
router.get("/messages/:roomId",getMessages);
module.exports=router;