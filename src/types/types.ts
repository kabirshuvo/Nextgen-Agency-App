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
