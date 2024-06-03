import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImage from "./DevImage";
import Badge from "./Badge";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div>
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Brand Promotion
            </div>
            <h1 className="h1">
              Graphic Design and <br /> Mobile First Web App Development
            </h1>
            <p>
              Promotopea specializes in graphic design and mobile-friendly web
              app development for effective brand promotion. From stunning
              visuals to seamless user experiences, we help you connect with
              your audience and elevate your online presence.
            </p>
          </div>
          <div>image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
