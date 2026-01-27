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

  useEffect(() => {
    // Temporarily disabled until API key is set
    // async function fetchPlace() {
    //   const res = await fetch("/api/getPlace?q=Common Grounds Salinas Ecuador");
    //   const json = await res.json();
    //   setData(json);
    // }
    // fetchPlace();
    // Mock data for now
    setData({
      name: "Common Grounds Salinas Ecuador",
      address: "Sample Address",
      rating: 4.5,
      totalReviews: 150
    });
  }, []);

  const rating = data?.rating ?? 0;
  const totalReviews = data?.totalReviews ?? 0;

  return (
    <div
      className={`mt-4 w-full h-auto flex flex-row md:gap-4 md:flex-row justify-center items-start lg:justify-start px-4 gap-2 transition duration-300 ${
        !data ? "blur-sm opacity-50" : "blur-0 opacity-100"
      }`}
    >
      <div className="h-auto w-auto flex flex-row items-center gap-2">
        {/* Rating number */}
        <p className="font-medium">{rating.toFixed(1)}</p>

        {/* Dynamic stars */}
        <Star rating={rating} />
      </div>

      {/* Review count */}
      <div>
        {data ? `${totalReviews} Google Reviews` : "Loading reviews..."}
      </div>
    </div>
  );
}
