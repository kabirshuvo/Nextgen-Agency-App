// models/BlogPost.ts
import mongoose, { Document, Schema } from "mongoose";

export interface BlogPostAttributes extends Document {
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const BlogPost =
  mongoose.models.BlogPost ||
  mongoose.model<BlogPostAttributes>("BlogPost", BlogPostSchema);

export default BlogPost;
