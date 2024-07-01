import mongoose from "mongoose";

const DesignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const Design = mongoose.models.Design || mongoose.model("Design", DesignSchema);
export default Design;
