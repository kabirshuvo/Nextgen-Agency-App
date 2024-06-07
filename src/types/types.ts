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
  avatar: string;
  name: string;
  job: string;
  review: string;
}

export interface ReviewsProps {
  reviews: Review[];
}
