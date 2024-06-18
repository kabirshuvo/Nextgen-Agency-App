import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import Socials from "../Socials";
import ExperienceBadge from "../Badges/ExperienceBadge";
import HappyClientsBadge from "../Badges/HappyClientsBadge";
import ReviewsBadge from "../Badges/ReviewsBadge";
import HeroTexts from "./HeroTexts";
import OffersButton from "../buttons/OffersButton";
import Brands from "../Brands";

const HeroSection = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w-[700px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <HeroTexts />
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Us <Send size={18} />
                </Button>
              </Link>

              <OffersButton />
            </div>
            <Brands />
          </div>
          {/* right div */}
          <div className="container hidden xl:flex relative">
            <ExperienceBadge containerStyles="absolute top-[15%] -right-[6%] " />
            <HappyClientsBadge containerStyles="absolute top-[35%] -right-[9%] " />
            <ReviewsBadge containerStyles="absolute top-[55%] -right-[6%] " />

            <div className="flex justify-center items-center">
              <video
                className="rounded-full object-cover"
                src="/assets/videos/earthFromSpace.mp4"
                autoPlay
                loop
                muted
                playsInline
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
