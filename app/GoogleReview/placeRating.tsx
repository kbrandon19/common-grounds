"use client";

import { useEffect, useState } from "react";
import Star from "./starRating";

interface PlaceData {
  name: string;
  address: string;
  rating: number;
  totalReviews: number;
}

export default function PlaceInfo() {
  const [data, setData] = useState<PlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPlace() {
      try {
        const res = await fetch("/api/getPlace?q=Common Grounds Salinas Ecuador");

        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Google Places fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPlace();
  }, []);

  const rating = data?.rating ?? 0;
  const totalReviews = data?.totalReviews ?? 0;

  return (
    <div
      className={`mt-4 w-full flex flex-row md:gap-4 justify-center items-start lg:justify-start px-4 gap-2 transition duration-300 ${
        loading ? "blur-sm opacity-50" : "blur-0 opacity-100"
      }`}
    >
      <div className="flex flex-row items-center gap-2">
        <p className="text-lg">{rating.toFixed(1)}</p>
        <Star rating={rating} />
      </div>

      <div >
        {loading && "Loading reviews..."}
        {error && "Unable to load reviews"}
        <p className="text-lg ">{!loading && !error && `${totalReviews} Google Reviews`}</p>
        
      </div>
    </div>
  );
}