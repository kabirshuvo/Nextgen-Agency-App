import mongoose, { Schema, Document } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerified: boolean;
  verifyCodeExpiry: Date;
  isAcceptingMessage?: boolean;
  meaasages?: Message[];
}
const UserSchema: Schema<User> = new Schema<User>({
  username: {
    type: String,
    required: [true, "User Name is Required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: { type: String, required: [true, "Password is Required"] },
  verifyCode: { type: String, required: [true, "Varify code is Required"] },
  isVerified: { type: Boolean, default: false },
  verifyCodeExpiry: { type: Date, required: true },
  isAcceptingMessage: { type: Boolean, default: true },
  meaasages: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
