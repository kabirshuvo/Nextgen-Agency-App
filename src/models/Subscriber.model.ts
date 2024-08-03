// src/models/Subscriber.model.ts
import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribeDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
