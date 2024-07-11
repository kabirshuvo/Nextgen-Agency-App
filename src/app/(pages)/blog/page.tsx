"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { BlogPost } from "@/types/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const POSTS_PER_PAGE = 9;

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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
    return <p className="text-center py-12">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-12 text-red-500">{error}</p>;
  }

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Promotopea Recent Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post: BlogPost) => (
          <Card
            key={post._id}
            className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold group">
                <Link
                  href={`/blog/${post._id}`}
                  className="group-hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <Link
              href={`/blog/${post._id}`}
              className="group-hover:text-blue-600 transition-colors"
            >
              <CardContent className="flex-grow">
                {post.imageUrl && (
                  <div className="w-full mb-4 overflow-hidden rounded-md">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={225}
                      layout="responsive"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <p className="text-sm text-gray-600">{post.summary}</p>
              </CardContent>
            </Link>
            <CardFooter>
              <Link
                href={`/blog/${post._id}`}
                className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
              >
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center items-center space-x-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BlogPage;
