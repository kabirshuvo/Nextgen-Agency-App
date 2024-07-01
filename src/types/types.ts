import { Key } from "readline";

// types.ts
export interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

export interface ProjectCardProps {
  works: Project;
}

export interface Review {
  // [x: string]: number;
  avatar: string;
  name: string;
  job: string;
  review: string;
  rating: number;
}

export interface ReviewsProps {
  reviews: Review[];
}

export interface BlogPost {
  _id: string;
  id?: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
}
export interface Design {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
}
export interface Development {
  _id: string;
  title: string;
  description: string;
}
export interface Optimization {
  _id: string;
  title: string;
  description: string;
}
