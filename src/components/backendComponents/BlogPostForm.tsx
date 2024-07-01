"use client";

import { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-lg w-full mx-4 p-6 shadow-md bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-4">
            Create a Blog Post
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {message && <p className="text-center text-green-500">{message}</p>}
            <div>
              <Label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
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
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <Label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
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
                className="mt-1 block w-full"
              />
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
