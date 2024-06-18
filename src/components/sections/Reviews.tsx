"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Review } from "@/types/types";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import { StarIcon } from "lucide-react";
const reviewsData: Review[] = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Emily R.",
    job: "Film Producer",
    review:
      "The graphic design team exceeded our expectations. They created visually stunning designs that perfectly captured our brand's essence. Highly recommended!",
    rating: 5,
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Mark S.",
    job: "CEO",
    review:
      "Our new website is fantastic! The web design team delivered a user-friendly, aesthetically pleasing site that has received great feedback from our clients.",
    rating: 5,
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "James L.",
    job: "Asset Manager",
    review:
      "The app development service was top-notch. The team was professional, responsive, and delivered an app that surpassed our expectations. Great work!",
    rating: 5,
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Sarah M.",
    job: "CEO",
    review:
      "The content creation service was exceptional. The team produced high-quality, engaging content that resonated well with our audience. We'll definitely use their services again.",
    rating: 5,
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "David K.",
    job: "Business Man",
    review:
      "Our email campaigns have never looked better. The email design and development team created beautiful, responsive emails that boosted our engagement rates significantly.",
    rating: 5,
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Amanda B.",
    job: "Managing Dirrector",
    review:
      "The SEO service has been a game-changer for our business. We've seen a substantial increase in organic traffic and our search engine rankings have improved dramatically.",
    rating: 5,
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
                  <CardFooter className="flex gap-x-1 items-center mt-4">
                    {/* Display stars based on the rating */}
                    {Array.from({ length: reviewer.rating }, (_, i) => (
                      <StarIcon key={i} size={18} className="text-primary" />
                    ))}
                  </CardFooter>
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
