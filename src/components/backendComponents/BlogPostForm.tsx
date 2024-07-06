"use client";

import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Dynamically import React Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // import styles
import { Textarea } from "../ui/textarea";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/blog", {
        title,
        summary,
        content,
        imageUrl,
      });

      console.log("Blog post created:", response.data);

      setTitle("");
      setSummary("");
      setContent("");
      setImageUrl("");

      setMessage("Blog post created successfully!");

      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error creating blog post:", error.response?.data);
        setMessage("Error creating blog post");
      } else {
        console.error("Unexpected error:", error);
        setMessage("Unexpected error");
      }

      setTimeout(() => setMessage(null), 3000);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary/60">
      <Card className="max-w-7xl w-full mx-4 p-6 shadow-2xl bg-white/80">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-4 text-primary">
            Create a Blog Post
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 flex flex-col justify-center items-center">
            {message && <p className="text-center text-green-500">{message}</p>}
            <div className="flex flex-wrap">
              <div className="w-full  px-2">
                <Label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blog Title :
                </Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full bg-primary/80"
                />
              </div>
              <div className="w-full  px-2">
                <Label
                  htmlFor="summary"
                  className="block text-sm font-medium text-gray-700"
                >
                  Summary
                </Label>
                <Textarea
                  id="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                  className="mt-1 block w-full bg-primary/80"
                />
              </div>
            </div>
            <div className="w-1/2 px-2">
              <Label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </Label>
              <Input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1 block w-full bg-primary/80"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full text-center px-2">
                <Label
                  htmlFor="content"
                  className="block text-sm font-medium bg-primary/80 text-white/80"
                >
                  Write Your Blog Content
                </Label>
                <ReactQuill
                  id="content"
                  value={content}
                  onChange={setContent}
                  theme="snow"
                  modules={modules}
                  className="mt-1 block w-full text-black h-56"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BlogPostForm;
