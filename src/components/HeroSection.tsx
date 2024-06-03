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
          <div className="flex flex-col max-w-[700px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Brand Promotion
            </div>
            <h1 className="h1">Graphic Design & App Development</h1>
            <p className="subtitle">
              From stunning visuals to seamless user experiences, we help you
              connect with your audience and elevate your online presence.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Us <Send size={18} />
                </Button>
              </Link>

              <Button variant="outline" className="gap-x-2">
                Download Offers <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge icon={RiBriefcase4Fill} />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImage
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/assets/hero/developer.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
