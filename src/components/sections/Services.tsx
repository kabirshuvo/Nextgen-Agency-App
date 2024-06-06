import {
  GanttChartSquare,
  Blocks,
  Gem,
  Snail,
  MailOpenIcon,
  Ship,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

const ServiceData = [
  {
    image: <GanttChartSquare size={60} strokeWidth={0.8} />,
    title: "Graphic Design",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
  {
    image: <Blocks size={60} strokeWidth={0.8} />,
    title: "Web Design",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
  {
    image: <Gem size={60} strokeWidth={0.8} />,
    title: "App Development",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
  {
    image: <Snail size={60} strokeWidth={0.8} />,
    title: "SEO",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
  {
    image: <MailOpenIcon size={60} strokeWidth={0.8} />,
    title: "Email Design and Development",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
  {
    image: <Ship size={60} strokeWidth={0.8} />,
    title: "Content Creation",
    Description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugaest assumenda corporis quidem eaque quos et asperiores, hic dolorum!",
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          What We Do
        </h2>
        <div className="grid md:grid-col-2 xl:grid-cols-3 gap-16 justify-center items-center">
          {ServiceData.map((s, index) => {
            return (
              <Card
                className="w-full max-w-[380px] h-[340px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px] left-4">
                  <div className="w-[140px] h-[80px] bg-pink-200 dark:bg-background flex justify-center items-center">
                    {s.image}
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="">
                    {s.Description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="absolute bottom-0">
                  <Button className=""> Learn More</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
