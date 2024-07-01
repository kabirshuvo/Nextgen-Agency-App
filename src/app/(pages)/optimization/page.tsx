"use client";
// src/app/(pages)/optimizations/page.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Optimization } from "@/types/types";

const OptimizationsPage = () => {
  const [optimizations, setOptimizations] = useState<Optimization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOptimizations = async () => {
      try {
        const response = await axios.get("/api/optimizations");
        if (Array.isArray(response.data.data)) {
          setOptimizations(response.data.data);
        } else {
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch optimizations.");
        setLoading(false);
      }
    };

    fetchOptimizations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our Optimizations</h1>
      <ul>
        {optimizations.map((optimization: Optimization) => (
          <li key={optimization._id} className="mb-6">
            <h2 className="text-2xl font-semibold">{optimization.title}</h2>
            <p>{optimization.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizationsPage;
