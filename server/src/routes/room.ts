import express from "express";
import { createRoom,getRoomsOfUser,joinRoom,codeSave } from "src/controllers/room";
const router=express.Router();
router.post("/room",createRoom);
router.post("/joinRoom",joinRoom);
router.get("/room/:userId",getRoomsOfUser);
router.post("/code",codeSave);
module.exports=router;