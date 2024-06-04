"use client";
import React, { useState } from "react";
import { RiEyeFillIcon } from "../Badges/BadgeIcons";

const HeroTexts: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
        Brand Promotion
      </div>
      <div className="relative">
        <h1
          className="h1 hover:text-popover transition duration-300 ease-in-out transform relative delay-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Graphic Design & Development
        </h1>
        <h1
          className={`hiddenh1 absolute inset-0 flex justify-center items-center md:justify-start transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 delay-200" : "opacity-0 delay-100"
          }`}
          style={{ pointerEvents: "none" }}
        >
          Creativity Is Our Key
        </h1>
      </div>
      <p className="subtitle hover:text-purple-700 transition duration-500 ease-in-out transform hover:scale-105">
        From stunning visuals to seamless user experiences, we help you connect
        with your audience and elevate your online presence.
      </p>
    </div>
  );
};

export default HeroTexts;
