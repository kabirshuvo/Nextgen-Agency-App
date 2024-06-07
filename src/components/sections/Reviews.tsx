"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Review } from "@/types/types";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

const reviewsData: Review[] = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Richard Thomson",
    job: "Film Producer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non iste ut qui eveniet eius. Aliquid, delectus. Itaque, adipisci aliquid.",
  },
];

const Reviews = () => {
  return (
    <section className="my-12 xl:my-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          className="h-[350px]"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewsData.map((reviewer, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-primary/20 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={reviewer.avatar}
                        width={70}
                        height={70}
                        alt={reviewer.name}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{reviewer.name}</CardTitle>
                        <p>{reviewer.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription>{reviewer.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
