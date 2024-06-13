"use client";
import { complitedWorks } from "@/lib/data";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

// Define the type for category
type Category = string;

const uniqueCategories: Category[] = [
  "all works",
  ...Array.from(new Set(complitedWorks.map((w) => w.category))),
];

const ProjectPage = () => {
  const [categories, setCategories] = useState<Category[]>(uniqueCategories);
  const [ctg, setCtg] = useState<Category>("all works");

  const handleTabChange = (category: Category) => {
    setCtg(category);
  };

  const filteredWorks = complitedWorks.filter((work) => {
    return ctg === "all works" ? work : work.category === ctg;
  });
  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-2xl sm:text-3xl lg:text-4xl">
          Projects
        </h2>
        <Tabs value={ctg} onValueChange={handleTabChange}>
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  className="m-2 px-4 py-2 text-sm sm:text-base lg:text-lg bg-gray-200 hover:bg-gray-300 rounded-lg"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg md:grid-cols-2 xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredWorks.map((works, index) => {
              return (
                <TabsContent value={ctg} key={index}>
                  <ProjectCard works={works} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectPage;
