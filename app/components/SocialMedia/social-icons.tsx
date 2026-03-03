"use client";


import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Navigation } from "@/lib/interface";
import { urlForImage } from "@/sanity/lib/image";


async function getData() {
  const query = `
    *[_type == 'navigation'][0] {
   
      socialMediaLinks[] {
        icon,
        socialName,
        socialLink
      }
    }
  `;
  const data: Navigation = await client.fetch(query);
  return data;
}

export default async function social_icons() {
  const data = await getData();
  return (
     <div className=" hidden md:flex w-full h-auto flex-col gap-x-4 justify-center  items-center mt-10">
        <h2 className="text-xl font-bold text-gray-800">Síguenos!</h2>

        <div className="flex flex-row">
          {data.socialMediaLinks.map((link, idx) => (
            <div
              key={idx}
              className="w-12 h-12 flex flex-row items-center justify-center"
            >
              <Link
                href={link.socialLink}
                target="_blank"
              >
                <Image
                  src={urlForImage(link.icon)}
                  alt={link.socialName}
                  width={32}
                  height={32}
                  
                />
              </Link>
            </div>
          ))}</div>
        </div>
  )
}

    