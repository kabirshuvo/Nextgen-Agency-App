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
