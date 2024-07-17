import mongoose, { Schema, Document } from "mongoose";

// Define the Message interface
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// Define the Message schema
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

// Define the User interface
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerified: boolean;
  verifyCodeExpiry: Date;
  isAdmin: boolean;
  isAcceptingMessages?: boolean;
  messages?: Message[];
  diamonds: number;
  lastDiamondUpdate: Date;
}

// Define the User schema
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
  verifyCode: { type: String, required: [true, "Verify code is Required"] },
  isVerified: { type: Boolean, default: false },
  verifyCodeExpiry: { type: Date, required: true },
  isAdmin: { type: Boolean, default: false },
  isAcceptingMessages: { type: Boolean, default: true },
  messages: [MessageSchema],
  diamonds: { type: Number, default: 300 },
  lastDiamondUpdate: { type: Date, default: Date.now },
});

// Define and export the User model
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
