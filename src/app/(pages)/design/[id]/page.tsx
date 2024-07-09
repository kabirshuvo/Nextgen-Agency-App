"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../../data/index";
import Contact from "@/components/sections/Contact";

export default function DesignDetail() {
  const params = useParams();
  const id = params.id as string;

  const image = images.find((img) => img.id.toString() === id);

  if (!image) {
    return <div>Design not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
      <div className="relative w-full max-w-2xl mx-auto mb-4 aspect-w-16 aspect-h-9">
        <Image
          src={image.src}
          alt={image.title}
          width={800}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-lg mb-4">{image.description}</p>
      <div>
        <Contact />
      </div>
      <Link href="/design" className="text-blue-500 hover:underline">
        Back to Gallery
      </Link>
    </div>
  );
}
