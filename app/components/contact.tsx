import React from "react";
// import Image from "next/image";
// import Link from "next/link";

function contact() {
  return (
    <div className="w-full h-auto relative mb-10" >
      
      {/* <div className="w-full md:max-w-1/2 md:mx-auto h-auto flex flex-col items-center lg:flex-row gap-10 lg:gap-0 md:justify-around"> */}
        {/* Open Hours */}
        {/* <div className="text-center">
          <h2 className="text-4xl mb-2">Store Hours</h2>

          <div>
            <div className="flex flex-row gap-2">
              <p className="w-40">Jueves - Domingo:</p>
              <p>08:00 - 14:00</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-40">Lunes - Meircoles:</p>
              <p> 08:00 - 13:30</p>
            </div>
          </div>
        </div> */}

        {/* Social Media */}
        {/* <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/whatsapp.png"
              alt="WhatsApp Icon"
              width={24}
              height={24}
            />{" "}
             <Link href="https://wa.me/0964213147">096 421 3147</Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            {" "}
            <Image
              src="/images/instagram.png"
              alt="Instagram Icon"
              width={24}
              height={24}
            />{" "}
            <Link href="https://www.instagram.com/commongroundss">commongroundss</Link>
          </div>
        </div> */}
      {/* </div> */}

      {/* Google Map Location */}
      {/* <div className="md:px-10 -mb-10 pt-10">
        <div className="w-full md:w-5/6 h-96 mx-auto aspect-[16/9] shadow-lg rounded-lg">
          <iframe
            src="https://www.google.com/maps?q=Common+Grounds+Coffee+and+Waffle+House&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}
      {/* Red Background Banner */}
      <div className="absolute -z-1 w-full h-16 bg-[#9C002B] text-white align-bottom flex justify-center items-end text-sm p-10 pb-4">
        <div className="w-full h-36 absolute inset-x-0 top-0 z-0 bg-[url('/images/CGBackground.png')] bg-repeat bg-[length:1000px_auto] bg-center-top" />


        <p>
          Common Grounds Coffee and Waffle House 2025. All Rights Reserved. Designed by DFCS
          
        </p>
      </div>
    </div>
  );
}

export default contact;
