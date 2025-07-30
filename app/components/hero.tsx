export const revalidate = 0;

import React from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Hero } from "@/lib/interface";
import { urlForImage } from "../../sanity/lib/image";

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
      <div className="w-full h-screen absolute inset-x-0 top-0 z-0 bg-[url('/images/CGBackground.png')] bg-repeat bg-[length:1000px_auto] bg-center-top" />

      {/* Container for Hero Text and Image */}
      <div className="w-auto h-screen relative z-5 flex flex-col lg:flex-row gap-y-10 justify-end md:justify-around items-center content-center pb-0">
        {/* Hero Text */}
        <div className=" px-24 md:p-0 flex flex-col items-center text-center lg:text-left lg:pl-16  gap-y-2 mt-36 lg:mt-0">
          <h1 className=" text-5xl md:text-8xl lg:text-8xl xl:text-9xl lg:leading-20 xl:leading-28">
            {data.sectiontext}
          </h1>

          {/* Google Review */}
          <div className="w-full h-auto flex flex-row md:gap-4 md:flex-row justify-center items-start lg:justify-start px-4 gap-2">
            <div className="h-auto w-auto flex flex-row items-start gap-2">
              <p>4.5</p>
              <Image
                src="/images/StarRating.png"
                alt="Number of stars"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="">235 Google Reviews</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="  w-full h-full relative  lg:mt-24 xl:mt-36">
          <Image
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
