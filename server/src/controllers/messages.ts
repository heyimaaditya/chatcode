import express from "express";
import MessageModel from "../models/Message";
export const createNewMessage=async(
    req:express.Request,
    res:express.Response
)=>{
    const newMessage=new MessageModel(req.body);
    try {
        const savedMessage=await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getMessages = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const messages = await MessageModel.find({
        roomId: req.params.roomId,
      });
  
      res.status(200).json(messages);
    } catch (e) {
      res.status(500).json(e);
    }
  };
