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
    <div className="w-full h-auto relative" id="Contact">   
    <div className="w-full h-120 absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground-Green_n7d9mn.png')] bg-repeat bg-[length:1000px_auto] bg-left-top opacity-25" />
    

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
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto -mt-12 mb-12">
        
  {/* Google Map Section */}
  <div className="w-full md:w-3/4 h-96 md:h-auto aspect-[16/9] md:aspect-auto">
    <iframe
      src="https://www.google.com/maps?q=Common+Grounds+Coffee+and+Waffle+House&output=embed"
      width="100%"
      height="100%"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Store Hours Section */}
  <div className="w-full md:w-1/4 p-8 flex flex-col justify-center ">
    <h2 className="text-3xl font-bold text-gray-800 mb-1">Common Grounds</h2>
    <p className="text-orange-600 font-medium mb-6">Ubicado en Salinas</p>

    <div className="space-y-3">
      {data.storehours.map((hour, idx) => (
        <div key={idx} className="flex justify-between text-gray-700 text-base">
          <span className="uppercase font-medium">{hour.day}</span>
          <span>{hour.openHours} – {hour.closeHours}</span>
        </div>
      ))}
    </div>

    <button className="mt-6 w-fit px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded transition">
      Ver ubicación
    </button>
  </div>
</div>

    </div>
  );
}

export default locationPrelude;
