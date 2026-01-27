"use client";

import React from "react";
// import Image from "next/image";
// import Link from "next/link";

function contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-auto relative p-10 text-sm text-center" >
      

        <p>
          Common Grounds Coffee and Waffle House 2026. All Rights Reserved. Designed & Developed by <a href="dfcreativestudio.com" target="_blank">DFCS</a>
          
        </p>
        <button
          onClick={scrollToTop}
          className="mt-4 px-4 py-2 bg-[#0f4c4d] text-white rounded hover:bg-[#196360] transition-colors duration-200"
          aria-label="Back to top"
        >
          Back to Top
        </button>
      
    </div>
  );
}

export default contact;
