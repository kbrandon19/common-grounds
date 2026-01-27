export const revalidate = 0;

import React from "react";
import { client } from "../../sanity/lib/client";
import { Hours } from "@/lib/interface";

// Query from Sanity
async function getData(): Promise<Hours | null> {
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

  if (!data || !data.storehours) {
    return (
      <>
      <div >        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 322"
          className="-mb-[2px]"
          style={{ display: "block" }}
        >
          <path
            fill="#0f4c4d"
            fillOpacity="1"
            d="M0,192L120,197.3C240,203,480,213,720,192C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg></div>
      <div className="w-full h-auto relative" id="Contact">

        <div className="w-full h-screen absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground-Green_n7d9mn.png')] bg-repeat bg-[length:500px_auto] lg:bg-[length:1000px_auto] bg-left-top opacity-25" />

        {/* Top Banner */}
        <div className="w-full h-screen px-4 flex flex-col items-center justify-center bg-[#0f4c4d] ">
          <div className="w-full lg:w-2/3 h-auto mx-auto text-center text-white">
            <h3 className="text-xs uppercase pb-2 mb-4">
              - Ven a visitarnos -
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold">
              Convenientemente ubicado en el corazón de Salinas. Estamos aquí
              para servirle desde temprano por la mañana hasta la tarde.
            </h2>
          </div>
        </div>
        {/* Fallback for no data */}
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto -mt-12 mb-12">
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
          <div className="w-full md:w-1/4 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              Common Grounds
            </h2>
            <p className="text-orange-600 font-medium mb-6">
              Ubicado en San Lorenzo, Salinas
            </p>
            <p className="text-gray-700">Store hours not available.</p>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <div className="w-full h-auto relative" id="Contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0f4c4d"
          fillOpacity="1"
          stroke="none"
          d="M0,192L120,197.3C240,203,480,213,720,192C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="w-full h-screen absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground-Green_n7d9mn.png')] bg-repeat bg-[length:1000px_auto] bg-left-top opacity-25" />

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
            stroke="none"
            d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Top Banner */}
      <div className="w-full h-120 px-4 flex flex-col items-center justify-center bg-[#0f4c4d] ">
        <div className="w-full lg:w-2/3 h-auto mx-auto text-center text-white">
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
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Common Grounds
          </h2>
          <p className="text-orange-600 font-medium mb-6">
            Ubicado en San Lorenzo, Salinas
          </p>

          <div className="space-y-3">
            {data.storehours.map((hour, idx) => (
              <div
                key={idx}
                className="flex justify-between text-gray-700 text-base"
              >
                <span className="uppercase font-medium">{hour.day}</span>
                <span>
                  {hour.openHours} – {hour.closeHours}
                </span>
              </div>
            ))}
          </div>

          {/* <button className="mt-6 w-fit px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded transition">
      Ver ubicación
    </button> */}
        </div>
      </div>
    </div>
  );
}

export default locationPrelude;
