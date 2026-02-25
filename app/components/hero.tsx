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
  
      <div className="relative w-full h-screen bg-[#9C002B] text-white " style={{ height: "calc(100vh)" }} id="/">
        {/* Background Image Vector */}
        <div className="w-full h-[calc(100vh+30px)] md:h-[calc(100vh+110px)] absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground_pwxndl.png')] bg-repeat bg-[length:500px_auto] lg:bg-[length:1000px_auto] bg-center-top"    />

        {/* Container for Hero Text and Image */}
        <div className="w-auto h-screen relative z-5 flex flex-col lg:flex-row  gap-y-2 md:justify-around items-center content-center pb-0">
          {/* Hero Text */}
          <div className=" md:p-0 flex flex-col items-center text-center lg:text-left lg:pl-16 gap-y-0 md:gap-y-4 mt-30 lg:mt-40">
            <h1 className=" md:p-2 text-6xl md:text-8xl lg:text-8xl xl:text-9xl lg:leading-20 xl:leading-28">
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
        
        {/* start of wave svg */}
        <div className="w-full h-80 -mb-1" id="Menú"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">    <path fill="#9C002B" fillOpacity="1" d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,90.7C672,96,768,128,864,122.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>

</svg></div>
         

      </div>

    
  );
}

export default HeroSection;
