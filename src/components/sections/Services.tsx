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
import Link from "next/link";

const ServiceData = [
  {
    image: <GanttChartSquare size={60} strokeWidth={0.8} />,
    title: "Graphic Design",
    Description:
      " Transforming ideas into stunning visuals that captivate and inspire.",
  },
  {
    image: <Blocks size={60} strokeWidth={0.8} />,
    title: "Web Design",
    Description:
      " Crafting beautiful, user-friendly websites that elevate your online presence.",
  },
  {
    image: <Gem size={60} strokeWidth={0.8} />,
    title: "App Development",
    Description:
      " Building innovative, high-performance apps that bring your vision to life.",
  },
  {
    image: <Snail size={60} strokeWidth={0.8} />,
    title: "SEO",
    Description:
      " Boosting your online visibility with expert SEO strategies that drive organic growth.",
  },
  {
    image: <MailOpenIcon size={60} strokeWidth={0.8} />,
    title: "Email Design and Development",
    Description:
      " Designing and developing emails that connect, convert, and keep your audience engaged.",
  },
  {
    image: <Ship size={60} strokeWidth={0.8} />,
    title: "Content Creation",
    Description:
      " Creating compelling content that engages, informs, and drives results.",
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-12 xl:mb-36 bg-blueSun bg-no-repeat">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 justify-center items-center">
          {ServiceData.map((s, index) => {
            return (
              <Card
                className="w-full max-w-[380px] h-[340px] flex flex-col pt-16 pb-10 justify-center items-center relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px] left-4">
                  <div className="w-[140px] h-[80px] bg-transparent rounded-full dark:bg-background flex justify-center items-center">
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
                  <Link href="/contact">
                    <Button className="">Contact Now</Button>
                  </Link>
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
