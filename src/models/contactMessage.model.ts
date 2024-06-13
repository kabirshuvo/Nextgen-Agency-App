import mongoose, { Schema, Document } from "mongoose";

interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const MessageSchema: Schema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Message ||
  mongoose.model<IMessage>("Message", MessageSchema);
