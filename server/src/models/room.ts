import { model, Schema, Document } from "mongoose";

export interface Member {
  userId: string;
  name: string;
}

export interface RoomSchema extends Document {
  roomName: string;
  roomId: string;
  password: string;
  members: Member[];
  code?: string; // Optional field
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema: Schema = new Schema(
  {
    roomName: {
      type: String,
      required: true, // Correct spelling: 'required' instead of 'require'
    },
    roomId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      default: "",
    },
    members: {
      type: [Object], // Define as array of objects
      default: [], // Initialize as empty array
      required: false, // Optional
    },
  },
  { timestamps: true }
);

export default model<RoomSchema>("Room", roomSchema);
