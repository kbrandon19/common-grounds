export const revalidate = 0;

import React from "react";
import { client } from "../../sanity/lib/client";
import { MenuPrelude } from "@/lib/interface";


    async function getData() {
      const query = `
        *[_type == 'menuPrelude'][0] {
          sectiontagline,
          sectiontitle,
          sectiontext
        }
      `;
      const data: MenuPrelude = await client.fetch(query);
      return data;
    }

async function menuPrelude() {
  const data: MenuPrelude = await getData();
  return (
    <div className="h-auto w-auto">
      {/* Background section */}
      <div className="relative w-full h-60 flex items-start justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#9C002B"
              fillOpacity="1"
              d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="text-center text-white px-4 pt-10">
          <h3 className="text-xs uppercase pb-2">
            - {data.sectiontagline} -
          </h3>
          <h2 className="text-5xl font-bold">{data.sectiontitle}</h2>
        </div>
      </div>

      {/* Section body */}
      <div className="text-center mx-auto h-auto">
        <div className="max-w-lg px-6 lg:px-0 text-2xl 2xl:text-3xl mx-auto">
          <p className="text-gray-700">{data.sectiontext}</p>
        </div>
      </div>
    </div>
  );
}

export default menuPrelude;