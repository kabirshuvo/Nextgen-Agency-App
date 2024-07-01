"use client";
// src/app/(pages)/developments/page.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Development } from "@/types/types";

const DevelopmentsPage = () => {
  const [developments, setDevelopments] = useState<Development[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevelopments = async () => {
      try {
        const response = await axios.get("/api/developments");
        if (Array.isArray(response.data.data)) {
          setDevelopments(response.data.data);
        } else {
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch developments.");
        setLoading(false);
      }
    };

    fetchDevelopments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Developments ...</h1>
      <ul>
        {developments.map((development: Development) => (
          <li key={development.id} className="mb-6">
            <h2 className="text-2xl font-semibold">{development.title}</h2>
            <p>{development.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentsPage;
