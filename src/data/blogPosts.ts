// src/data/blogPosts.ts
import { BlogPost } from "@/types/types"; // Adjust the import path as needed

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Adobe Illustrator",
    summary: "This is the summary of the Adobe Illustrator blog post.",
    content: "This is the content of the first blog post.",
    imageUrl: "/images/adobe-illustrator-cc.svg", // Path to the header image
  },
  {
    id: 2,
    title: "Brand Promotion Overview",
    summary: "This is the summary of the Brand Promotion Overview blog post.",
    content: "This is the content of the second blog post.",
    imageUrl: "/images/bmw.svg", // Path to the header image
  },
  // Add more blog posts here
];
