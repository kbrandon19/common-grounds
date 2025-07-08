export const revalidate = 0;

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="w-full h-auto">
      {/* Top Banner */}
      <div className="w-auto h-120 my-0 px-4 flex flex-col items-center justify-center bg-[#0f4c4d]">
        <div className="w-2/3 h-auto mx-auto text-center text-white">
          <h3 className="text-xs uppercase pb-2 mb-4">- Ven a visitarnos -</h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            Convenientemente ubicado en el corazón de Salinas. Estamos aquí para
            servirle desde temprano por la mañana hasta la tarde.
          </h2>
        </div>
      </div>

      {/* Store Hours + Social Media */}
      <div className="w-full md:max-w-1/2 md:mx-auto h-auto flex flex-col items-center lg:flex-row gap-10 lg:gap-0 md:justify-around my-10">
        {/* Store Hours */}
        <div className="text-center">
          <h2 className="text-4xl mb-2">Store Hours</h2>
          <div>
            {data.storehours.map((hour, idx) => (
              <div key={idx} className="flex flex-col items-center mb-4">
                <p className="text-lg font-semibold">{hour.day}</p>
                <p className="text-sm text-gray-600">
                  {hour.openHours} – {hour.closeHours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-row gap-4 justify-center">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/whatsapp.png"
              alt="WhatsApp Icon"
              width={24}
              height={24}
            />
            <Link href="https://wa.me/0964213147">096 421 3147</Link>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/instagram.png"
              alt="Instagram Icon"
              width={24}
              height={24}
            />
            <Link href="https://www.instagram.com/commongroundss">
              commongroundss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default locationPrelude;
