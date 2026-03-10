export const revalidate = 0;

import React from "react";
import { client } from "../../sanity/lib/client";
import { Hours } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import ContactBanner from "./Banner/contactBanner";
// import SocialIcons from "./SocialMedia/social-icons";

// Query from Sanity
async function getData(): Promise<Hours | null> {
  const query = `
    *[_type == 'hours'][0] {
       "storehours": storeHours[]{
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
        <div className="w-full h-64 drop-shadow-md relative" id="Contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 321"
            className="drop-shadow-lg" // or drop-shadow-xl for even more
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              fill="#0f4c4d"
              fillOpacity="1"
              d="M0,192L120,197.3C240,203,480,213,720,192C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>

        <div className="w-full h-auto relative">
          <div className="w-full h-screen absolute inset-x-0 -top-10 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground-Green_n7d9mn.png')] bg-repeat bg-[length:500px_auto] lg:bg-[length:1000px_auto] bg-top-left opacity-25" />

          {/* Top Banner */}

<ContactBanner/>
          
          {/* Fallback for no data */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto -mt-12 mb-12">
            <div className="w-full md:w-3/4 h-96 md:h-auto aspect-video md:aspect-auto">
              <Image
                src={`https://maps.googleapis.com/maps/api/staticmap?center=-2.2052105,-80.9597101&zoom=16&scale=2&size=600x200&markers=color:red%7C-2.2052105,-80.9597101&key=${process.env.GOOGLE_MAPS_API}`}
                alt="Common Grounds Coffee and Waffle House location"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
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
<>
    <div className="w-full h-10 " id="Contactenos"></div>
    <div className="w-full h-auto relative mb-30 ">
      <div className="w-full h-170 absolute inset-x-0 top-0 z-0 bg-[url('https://res.cloudinary.com/dujkjy2e2/image/upload/v1758307490/Common%20Grounds/Background/CGbackground-Green_n7d9mn.png')] bg-repeat bg-[length:500px_auto] lg:bg-[length:1000px_auto] bg-top-left opacity-25" style={{backgroundImage: `url(https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/v1772162928/Common%20Grounds/Background/Green_Coffee_Bean.webp)`}} />

      <div className="w-full h-auto  " >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mb-1"
        >
          
               <path fill="#0f4c4d" fillOpacity="1" d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,90.7C672,96,768,128,864,122.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>



        </svg>
        
      </div>


      {/* Contact Banner */}
      <ContactBanner />

      {/* Store Hours + Social Media */}
<div className="relative z-6 flex flex-col-reverse md:flex-row bg-white md:rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto -mt-40 md:-mt-50 mb-12">
        {/* Google Map Section */}
        <div className="w-full md:w-2/3 h-auto md:h-auto aspect-video md:aspect-auto px-2 md:px-0">
          <Link
            href="https://maps.app.goo.gl/BZ49F8m6fNjXR4H8A"
            className="cursor-pointer"
          >

            <Image
              src={`https://maps.googleapis.com/maps/api/staticmap?center=-2.2052105,-80.9597101&zoom=16&scale=2&size=500x200&markers=color:red%7C-2.2052105,-80.9597101&key=${process.env.GOOGLE_MAPS_API}`}
              alt="Common Grounds Coffee and Waffle House location"
              width={500}
              height={200}
              className="w-full h-full object-cover"
            /> 
          </Link>
          
        </div>

        {/* Store Hours Section */}
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Common Grounds
          </h2> */}

          <p className="text-orange-600 font-medium mb-2 ">
            Horarios de Atención
          </p>

          <div className="space-y-1">
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

          <div>
            {/* <SocialIcons /> */}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default locationPrelude;
