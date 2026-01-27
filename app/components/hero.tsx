export const revalidate = 0;

import React from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Hero } from "@/lib/interface";
import { urlForImage } from "../../sanity/lib/image";
import Rating from "../GoogleReview/placeRating";

async function getData() {
  const query = `
    *[_type == 'hero'][0]{
      backgroundImage,
      sectiontext,
    }
  `;
  return client.fetch<Hero>(query);
}

async function HeroSection() {
  const data: Hero = await getData();
  return (
    // Outter Container
    <div className="relative w-full h-screen bg-[#9C002B] text-white " id="/">
      {/* Background Image Vector */}
      <div className="w-full h-screen absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground_pwxndl.png')] bg-repeat bg-[length:1000px_auto] bg-center-top" />

      {/* Container for Hero Text and Image */}
      <div className="w-auto h-screen relative z-5 flex flex-col lg:flex-row gap-y-10 justify-end md:justify-around items-center content-center pb-0">
        {/* Hero Text */}
        <div className=" md:p-0 flex flex-col items-center text-center lg:text-left lg:pl-16  gap-y-2 mt-36 lg:mt-0">
          <h1 className=" p-2 text-6xl md:text-8xl lg:text-8xl xl:text-9xl lg:leading-20 xl:leading-28">
            {data.sectiontext}
          </h1>

          {/* Google Review */}
          <Rating />
        </div>

        {/* Hero Image */}
        <div className="  w-full h-full relative  lg:mt-24 xl:mt-36">
          <Image
            priority
            src={urlForImage(data.backgroundImage)}
            alt="Background Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
