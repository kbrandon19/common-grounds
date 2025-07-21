export const revalidate = 0;

import React from "react";
import { client } from "../../sanity/lib/client";
import { Hours } from "@/lib/interface";



// Query from Sanity
async function getData(): Promise<Hours> {
  const query = `
    *[_type == 'hours'][0] {
      storehours[]{
        day,
        openHours,
        closeHours
      }
    }
  `;
  return await client.fetch(query);
}

async function locationPrelude() {
  const data = await getData();

  return (
    <div className="w-full h-auto relative" id="Contact">   <div className="w-full h-120 absolute inset-x-0 top-0 z-0 bg-[url('/images/CGBackground-Green.png')] bg-repeat bg-[length:1000px_auto] bg-left-top opacity-25" />
      {/* Top Banner */}
      <div className="w-full h-120 px-4 flex flex-col items-center justify-center bg-[#0f4c4d] ">

     

        <div className="w-2/3 h-auto mx-auto text-center text-white">
          <h3 className="text-xs uppercase pb-2 mb-4">- Ven a visitarnos -</h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            Convenientemente ubicado en el corazón de Salinas. Estamos aquí para
            servirle desde temprano por la mañana hasta la tarde.
          </h2>
        </div>
      </div>

      {/* Store Hours + Social Media */}
      <div className="w-full sm:w-1/2  mx-auto h-auto flex flex-col items-center gap-10 lg:gap-0  my-10">
        {/* Store Hours */}
        <div className="text-center w-1/2">
          {/* <h2 className="text-4xl mb-2">Store Hours</h2> */}
          <div>
            {data.storehours.map((hour, idx) => (
              <div key={idx} className="flex flex-row gap-x-4 items-center justify-between">
                <p className="text-xl font-semibold">{hour.day}</p>
                <p className="text-lg text-gray-600">
                  {hour.openHours} – {hour.closeHours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default locationPrelude;
