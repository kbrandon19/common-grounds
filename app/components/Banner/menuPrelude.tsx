export const revalidate = 0;

import React from "react";
import { client } from "../../../sanity/lib/client";
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
  
  <>
  <div className="w-full h-30 md:h-50" />

    <div className="h-auto w-auto mb-10"  >
      {/* Background section */}
   
      {/* Section body */}
      <div className="text-center mx-auto h-auto" >
        <div className="max-w-lg px-6 lg:px-0  mx-auto">
                    <h3 className="text-xs uppercase pb-2">- {data.sectiontagline} -</h3>

          <h2 className="text-5xl font-bold">{data.sectiontitle}</h2>
          <p className="text-gray-700 text-xl mt-4">{data.sectiontext}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default menuPrelude;
