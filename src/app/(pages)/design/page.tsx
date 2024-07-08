"use client";
// import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Link from "next/link";
import ImageCard from "@/components/GalleryImageCard";
import { images } from "../../data/index";
// Define type for individual image data

export default function DesignGallery() {
  // Sample data for images

  return (
    <div className="flex flex-col items-center" id="gallery">
      {/* Hero Section */}
      <div className="bg-primary/20 text-white py-12 px-6 text-center w-full h-96 flex flex-col justify-center items-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Promotopea Design Gallery
        </h1>
        <p className="text-lg md:text-xl">Explore Our Ideas and works.</p>
      </div>

      {/* Image Gallery */}
      <div className="md:col-span-2 -mt-24">
        {/* Individual Image Cards */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto p-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <Link href={image.link}>
                <ImageCard image={image} />
              </Link>
              <div className="text-right">{image.description}</div>
            </div>
          ))}
        </div>

        {/* Other Sections */}
        <div className="bg-transparent p-4 text-cyan-700 hover:text-cyan-500 flex justify-center items-center">
          <button className="px-4 py-2 border border-white rounded-lg">
            <Link href="/">Go Back to Home</Link>
          </button>
        </div>
        {/* <div className="bg-gray-300 p-4">Other Section 2</div> */}
      </div>
    </div>
  );
}
