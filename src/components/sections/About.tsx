"use client";
import DevImage from "../DevImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Watch,
} from "lucide-react";
import Image from "next/image";
import { Key } from "react";

// Define the types
type AboutDataItem = {
  companyName: string;
  registeredCountry: string;
  establishedAt: string;
};

type ServiceDataItem = {
  service: string;
  description: string;
};

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Team Forest",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Team Forest",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Team Forest",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "Team Forest",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Team Forest",
  },
  {
    icon: <Calendar size={20} />,
    text: "Team Forest",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Team Forest",
  },
];

const servicesData = [
  {
    title: "Our Services at a glance",
    data: [
      {
        companyName: "Promotopea",
        registeredCountry: "Bangladesh",
        establishedAt: "2007",
      },
      {
        companyName: "Creative Hub",
        registeredCountry: "India",
        establishedAt: "2015",
      },
    ],
  },
  {
    title: "Services",
    data: [
      {
        service: "Graphic Design",
        description: "High-quality graphic design services for all your needs.",
        experience: "16 Years",
      },
      {
        service: "Web Development",
        description: "Building responsive and dynamic web applications.",
        experience: "3 Years",
      },
      {
        service: "SEO Optimization",
        description: "Improving your website’s visibility on search engines.",
        experience: "5 Years",
      },
    ],
  },
];

const experiencesData = [
  {
    title: "skills",
    data: [
      {
        name: "Photo editing, Illustration, Motion",
        yearsOfExperience: "16 years",
        happyClients: 5000,
      },
      {
        name: "video editing, Figma Design, Email Design",
        yearsOfExperience: "2 years",
        happyClients: 19,
      },
      {
        name: "JavaScript, Nextjs, Mongoose, Redux, Typescript",
        yearsOfExperience: "3 years",
        happyClients: 19,
      },
    ],
  },
  // {
  //   title: "tools",
  //   data: [
  //     {
  //       imagePath: "/about/photoshop.svg",
  //     },
  //     {
  //       imagePath: "/about/Illustrator.svg",
  //     },
  //     {
  //       imagePath: "/about/vscode.svg",
  //     },
  //     {
  //       imagePath: "/about/figma.svg",
  //     },
  //   ],
  // },
  {
    title: "technology",
    data: [
      {
        name: "Adobe Photoshop, Illustrator, AfterEffect",
        yearsOfExperience: "16 years",
        happyClients: 5000,
      },
      {
        name: "HTML-5, CSS-3, JavaScript",
        yearsOfExperience: "5 years",
        happyClients: 19,
      },
      {
        name: "React, Next.js, Node.js",
        yearsOfExperience: "3 years",
        happyClients: 25,
      },
    ],
  },
];

const AboutSection = () => {
  const getData = (arr: any[], title: any) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="container pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Promotopea
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="hidden xl:flex flex-1 relative">
          <DevImage
            containerStyles="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/backdropLines.svg"
          />
        </div>

        <div className="flex-1">
          <Tabs defaultValue="about">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="about">
                Info
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="services">
                Services
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="about">
                <div className="text-center md:text-left">
                  <h3 className="h3 mb-4">
                    Unmatched Service Quality for Over 16 Years
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    We specialize in Graphic Design and crafting intuitive
                    websites with modern-edge technology, delivering dynamic and
                    engaging user experiences.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-16">
                    {infoData.map((info, index) => (
                      <div
                        className="flex items-center gap-4 mx-auto xl:mx-0"
                        key={index}
                      >
                        <div className="text-primary">{info.icon}</div>
                        <div>{info.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="services">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    Our Experienced Services
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni culpa molestias, facilis eaque sint a eos? Voluptates
                    nobis quam sed architecto tenetur, ratione ullam alias iste
                    quos illo sit voluptas!
                  </p>
                  <div>
                    <div className="flex gap-x-4 items-center h4 text-primary">
                      <Briefcase />
                      <div className="capitalize font-medium">
                        {
                          getData(servicesData, "Our Services at a glance")
                            .title
                        }
                      </div>
                    </div>
                    <div>
                      {getData(servicesData, "Services").data.map(
                        (
                          services: {
                            service: string;
                            description: string;
                            experience: string;
                          },
                          index: Key | null | undefined
                        ) => {
                          const { service, description, experience } = services;
                          return (
                            <div className="flex flex-col group" key={index}>
                              <div className="h3 leading-none my-2 relative">
                                <div className="w-[16px] h-[16px] rounded-full bg-primary absolute -left-[20px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                {service}
                              </div>
                              <div className="text-muted-foreground ">
                                {description}
                              </div>
                              <div className="text-base font-medium text-destructive">
                                More than {experience} of experience
                              </div>
                              <hr className="my-4" />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    Our Skills and Technologies
                  </h3>
                  <p className="subtitle">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sunt, iure repellendus? Necessitatibus aliquid quis beatae,
                    voluptas porro ad delectus eum a itaque, non corrupti cumque
                    deserunt commodi esse ipsa! Error?
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4">
                    {experiencesData.map((experience, index) => (
                      <div key={index} className="mb-8">
                        <h4 className="h4 mb-4 text-muted">
                          {experience.title}
                        </h4>
                        {/* className="grid xl:grid-cols-2 gap-4" */}
                        <div className="flex flex-col gap-4">
                          {experience.data.map((skills: any, index: Key) => (
                            <div
                              className="flex flex-col items-start mx-auto xl:mx-0"
                              key={index}
                            >
                              {skills.name && (
                                <>
                                  <div className="text-primary flex flex-col">
                                    {skills.name}
                                  </div>
                                  <div className="">
                                    {skills.yearsOfExperience} of experience,
                                    <br />
                                    {skills.happyClients} happy clients
                                    <hr className="mb-4" />
                                  </div>
                                </>
                              )}
                              {/* <div className="flex justify-center items-center">
                                {skills.imagePath && (
                                  <Image
                                    src={skills.imagePath}
                                    alt={experience.title}
                                    width={50}
                                    height={50}
                                  />
                                )}
                              </div> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
