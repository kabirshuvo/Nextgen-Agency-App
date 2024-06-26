// src/app/(pages)/blog/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { BlogPost } from "@/types/types"; // Adjust the import path as needed

const BlogPostPage = () => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/blog/${id}`);
          if (response.data.success) {
            setBlogPost(response.data.data);
          } else {
            setError(response.data.error);
          }
          setLoading(false);
        } catch (error) {
          setError("Failed to fetch blog post.");
          setLoading(false);
        }
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{blogPost.title}</h1>
      {blogPost.imageUrl && (
        <Image
          src={blogPost.imageUrl}
          alt={blogPost.title}
          width={800}
          height={400}
          priority={blogPost.imageUrl === "/images/adobe-illustrator-cc.svg"}
        />
      )}
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPostPage;
