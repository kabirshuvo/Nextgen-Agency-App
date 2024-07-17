import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kawser Santo",
      avater: "/avater/user_avatar5.png",
      role: "Graphic Design Team Lead",
      expertise: "Adobe Illustrator, Book Illustration, Technical Drawing",
    },
    {
      name: "Iffath Zuairia",
      avater: "/avater/user_avatar2.png",
      role: "UI/UX Designer, Asthetic Art Dirrector",
      expertise: "Figma, UI/UX Design, Illustration, Gif Animation",
    },
    {
      name: "Kabir Shuvo",
      avater: "/avater/user_avatar.jpg",
      role: "Problem Solver, Motivator, Idea Sustainability Analyst",
      expertise:
        "Next.js, Web Developer, Software Engineering, Back-end Development",
    },
    {
      name: "Solaiman Badsha",
      avater: "/avater/user_avatar4.jpg",
      role: "UI/UX SPECIALIST, Fullstack, Team Lead",
      expertise: "Fullstack Web Developer, Front-end Specialist,",
    },
    {
      name: "Annisha Siddika",
      avater: "/avater/user_avatar1.png",
      role: "Front-end Specialist",
      expertise:
        "Web Development, Front-end Specialist, Typescript, Web Animation, Responsiveness",
    },

    {
      name: "Rabbil Hasan",
      avater: "/avater/user_avatar3.png",
      role: "SEO Specialist",
      expertise:
        "Search Engine Optimization, Social Media Marketing and In depth Research",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Promotopea</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Story
        </h2>
        <p className="mb-4">
          Established in 2011 in Bangladesh, Promotopea has been at the
          forefront of brand promotion and digital innovation for over a decade.
          Our journey began with a vision to help brands, both new and existing,
          to thrive in the digital landscape.
        </p>
        <p>
          Today, our head office stands proud in the heart of Dhaka, the capital
          of Bangladesh, from where we continue to serve clients worldwide with
          our comprehensive range of services.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Services
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Brand Creation and Promotion</li>
          <li>
            Illustration (including Book Illustration and Technical Drawing)
          </li>
          <li>Content Creation</li>
          <li>Modern Web App Design</li>
          <li>Web Development</li>
          <li>Search Engine Optimization</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-primary/20 shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between relative">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="absolute top-0 right-0">
                  <Image
                    src={member.avater}
                    alt={member.name}
                    width={40}
                    height={25}
                    className="transition-transform duration-300 hover:scale-105 rounded-full -mt-8 "
                  />
                </div>
              </div>
              <p className="text-orange-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Our Mission
        </h2>
        <p>
          At Promotopea, we strive to empower brands with cutting-edge digital
          solutions. Our mission is to blend creativity with technology,
          delivering exceptional results that help our clients stand out in
          today&apos;s competitive market.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
