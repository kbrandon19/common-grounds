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
    <div className="h-auto w-auto mb-16" id="Menu">
      {/* Background section */}
      <div className="relative w-full h-60 flex items-center justify-center ">
        
        <div className="absolute inset-0 -z-10 ">
          <div className="absolute w-full h-60 -top-5 lg:top-0 left-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1770431822/Common%20Grounds/Background/Frame_3_gnmkbi.png')] bg-repeat-x bg-[length:1000px_auto] bg-center-top" />
            
            
            

            
          
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ display: "block" }} // Add this
          >
            <path
              fill="#9C002B"
              fillOpacity="1"
              d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>

         
        </div>

      </div>

      {/* Section body */}
      <div className="text-center mx-auto h-auto">
        <div className="max-w-lg px-6 lg:px-0  mx-auto">
                    <h3 className="text-xs uppercase pb-2">- {data.sectiontagline} -</h3>

          <h2 className="text-5xl font-bold">{data.sectiontitle}</h2>
          <p className="text-gray-700 text-xl mt-4">{data.sectiontext}</p>
        </div>
      </div>
    </div>
  );
}

export default menuPrelude;
