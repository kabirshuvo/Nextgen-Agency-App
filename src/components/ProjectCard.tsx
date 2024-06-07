import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { ProjectCardProps } from "@/types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({ works }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={works.image}
            width={247}
            height={250}
            alt={works.description}
            priority
          />
          <div>
            <Link
              href={works.link}
              className="bg-black/60 w-[48px] h-[48px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-100"
            >
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {works.category}
        </Badge>
        <h4 className="h4 mb-1">{works.name}</h4>
        <p className="text-muted-foreground text-sm">{works.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
