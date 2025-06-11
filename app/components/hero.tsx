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
    <div className="w-auto h-screen mb-20 " >
       <div className="px-54 pt-24">
          <h1 className="text-9xl">{data.sectiontext}</h1>
        </div>

      <div className="absolute -z-1"><Image
          src={urlForImage(data.backgroundImage)}
          alt="Background Image"
          height={1080}
          width={1920}
          className="object-contain object-center"
        /></div>
        
       
        <div>
        
        </div>
       
    </div>
  )
}

export default hero