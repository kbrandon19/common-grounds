export const revalidate = 0;

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { Hero } from "@/lib/interface";
import { urlForImage } from "../../sanity/lib/image";

async function getData() {
  const query = `
    *[_type == 'hero'][0] {
      backgroundImage,
      sectiontext,
    }
  `;

  const data: Hero = await client.fetch(query);
  return data;
}

async function hero() {
  const data: Hero = await getData();
  return (
    <div className="w-auto h-screen ">
      <div className="w-auto h-screen px-10 2xl:px-24 flex flex-col justify-center">
        <h1 className="max-w-5xl text-7xl lg:text-9xl lg:leading-28 ">
          {data.sectiontext}
        </h1>

        {/* Google Review */}
        <div className="w-full h-auto flex flex-col md:gap-4 md:flex-row  px-4 mt-8 text-left">
          <div className="flex flex-row gap-2">
            <p>4.5</p>
            <Image
              src="/images/StarRating.png"
              alt="Number of stars"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="text-[#0b57d0]">
            235 Google Reviews
            </div>
        </div>
      </div>
     

      {/* Background Image */}
      <div className="absolute -z-1 bg-amber-100">
        <Image
          src={urlForImage(data.backgroundImage)}
          alt="Background Image"
          fill
         
          className="object-cover"
        />
      </div> 
      

    </div>
  );
}

export default hero;
