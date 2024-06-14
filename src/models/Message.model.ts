import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel =
  mongoose.models.Message || mongoose.model<Message>("Message", MessageSchema);

export default MessageModel;
