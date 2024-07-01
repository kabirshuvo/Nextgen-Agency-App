import mongoose from "mongoose";

const OptimizationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Optimization =
  mongoose.models.Optimization ||
  mongoose.model("Optimization", OptimizationSchema);
export default Optimization;
