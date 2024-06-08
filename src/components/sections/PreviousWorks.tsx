"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { complitedWorks } from "@/lib/data";

const PreviousWorks: React.FC = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Previous Works</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consector lorem dash dash lorem therty
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>{" "}
        </div>
        <div className="xl:max-w-[960px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] bg-black/20"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {complitedWorks.slice(0, 6).map((works, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard works={works} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorks;
