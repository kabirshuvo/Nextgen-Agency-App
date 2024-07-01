"use client";
// src/app/(pages)/designs/page.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Design } from "@/types/types";

const DesignsPage = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get("/api/designs");
        if (Array.isArray(response.data.data)) {
          setDesigns(response.data.data);
        } else {
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch designs.");
        setLoading(false);
      }
    };

    fetchDesigns();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Designs...</h1>
      <ul>
        {designs.map((design: Design) => (
          <li key={design._id} className="mb-6">
            <h2 className="text-2xl font-semibold">{design.title}</h2>
            {design.imageUrl && (
              <Image
                src={design.imageUrl}
                alt={design.title}
                width={200}
                height={100}
                priority
              />
            )}
            <p>{design.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignsPage;
