import mongoose from "mongoose";

const DevelopmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Development =
  mongoose.models.Development ||
  mongoose.model("Development", DevelopmentSchema);
export default Development;
