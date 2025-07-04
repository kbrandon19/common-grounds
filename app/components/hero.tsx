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
    <div className="w-full h-screen bg-[#9C002B] text-white ">

      <div className="w-auto h-screen   gap-y-4 flex flex-col md:flex-row justify-center content-center pb-24">

        <div className="px-4 md:p-0 flex mt-36 flex-col justify-center content-center basis-1/3 h-full gap-y-2">
          <h1 className="max-w-5xl text-6xl lg:text-9xl lg:leading-28 ">
            {data.sectiontext}
          </h1>
           {/* Google Review */}
        <div className="w-full h-auto flex flex-row md:gap-4 md:flex-row  px-4 text-left">
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
          <div className="">
            235 Google Reviews
            </div>
        </div>
        </div>

        <div className="w-auto h-auto basis-1/2 relative  md:mt-0 xl:mt-24">
          <Image
            src={urlForImage(data.backgroundImage)}
            alt="Background Image"
            fill
            className="object-contain"
          />
        </div>

      </div>

      {/* Background Image */}
      {/* <div className="w-full h-full absolute -z-1 inset-x-0 top-0">
        <Image
          src={urlForImage(data.backgroundImage)}
          alt="Background Image"
          fill
         
          className="object-cover"
        />
      </div>  */}

       
    </div>
  );
}

export default hero;
