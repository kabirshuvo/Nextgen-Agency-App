// src/app/(pages)/blog/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { BlogPost } from "@/types/types";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blog");
        if (Array.isArray(response.data.data)) {
          setBlogPosts(response.data.data);
        } else {
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog posts.");
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {blogPosts.map((post: BlogPost) => (
          <li key={post._id} className="mb-6">
            <Link href={`/blog/${post._id}`}>
              <p className="text-2xl font-semibold hover:underline">
                {post.title}
              </p>
            </Link>
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={200}
                height={100}
              />
            )}
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
