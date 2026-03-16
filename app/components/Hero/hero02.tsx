export const revalidate = 0;

import React from "react";
import { client } from "@/sanity/lib/client";
import { Hero } from "@/lib/interface";
import Rating from "./../../GoogleReview/placeRating";
import Image from "next/image";

async function getData() {
  const query = `
    *[_type == 'hero'][0]{
      backgroundImage,
      sectiontext,
    }
  `;
  return client.fetch<Hero>(query);
}

async function Hero02() {
  const data: Hero = await getData();
  return (
    <div
      className="relative w-full h-screen bg-red text-white"
      style={{ height: "calc(100vh)" }}
      id="/"
    >
      {/* Coffee Bean Background — full top section */}
      <div
        className="w-full h-[calc(100vh+30px)] md:h-[calc(100vh+110px)] absolute inset-x-0 top-0 z-0 bg-repeat bg-[length:500px_auto] lg:bg-[length:1000px_auto] bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/v1772135489/Common%20Grounds/Background/Red_Coffee_Bean.webp)`,
        }}
      />

      {/* Container for Hero Text and Image */}
      <div className="w-auto h-[calc(100vh+200px)] relative z-5 flex flex-col gap-y-2 justify-center items-center content-center">
        {/* Hero Text */}
        <div className="w-5/6 md:p-0 flex flex-col items-center text-center gap-y-0 md:gap-y-4 mt-50">
          <h1 className="md:p-2 text-6xl md:text-8xl lg:text-8xl lg:leading-26 font-semibold drop-shadow-xl/25">
            {data.sectiontext}
          </h1>
          <div className="w-full h-auto">
            <Rating />
          </div>
        </div>

        {/* Food photo + wave mask */}
        <div className="w-full h-150 relative md:overflow-hidden mt-40 md:mt-0">
          <div className="absolute right-20 -top-10 md:top-20 md:right-60 text-9xl z-20">
            <a href={"#Menú"}>
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/v1772987751/Common%20Grounds/Background/ver-menu-graphic_nhtx9n.webp`}
                alt="Coffee and Waffle"
                width={200}
                height={200}
                className="rotate-5 opacity-0 animate-fadeIn w-[150px] md:w-[200px] h-auto"
              />
            </a>
          </div>
          {/* Food background image — full area */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/v1772987751/Common%20Grounds/Background/rachel-park-hrlvr2ZlUNk-unsplash_ch5keh.jpg)`,
            }}
          />

          {/* TOP wave — coffee bean pattern */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="coffeeBeanPattern"
                patternUnits="userSpaceOnUse"
                width="500"
                height="500"
              >
                <rect width="500" height="500" fill="#9C002B" />
                <image
                  href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/v1772135489/Common%20Grounds/Background/Red_Coffee_Bean.webp`}
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              fill="url(#coffeeBeanPattern)"
              fillOpacity="1"
              d="M0,192L40,165.3C80,139,160,85,240,53.3C320,21,400,11,480,32C560,53,640,107,720,117.3C800,128,880,96,960,112C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
          </svg>

          {/* BOTTOM wave — solid red, flipped upside down */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute -bottom-4 md:-bottom-1 left-0 w-full rotate-180"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,90.7C672,96,768,128,864,122.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>
      </div>
      {/* Creates artifial spacing for mobilee section to prevent wave from covering content */}
      <div id="Menú" className="w-full h-48 -mt-40"></div>
    </div>
  );
}

export default Hero02;
