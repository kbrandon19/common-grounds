"use client";

import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

function contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-auto relative px-10 pb-2 text-sm text-center flex flex-col-reverse md:flex-row items-center justify-between ">
      <p className="w-full text-xs">
        Copywright © 2026 Common Grounds Coffee and Waffle House. All Rights Reserved.
        Designed & Developed by{" "}
        <a href="https://www.dfcreativestudio.com" target="_blank">
          DFCS
        </a>
      </p>
      <div className="w-full h-full flex justify-center md:justify-end items-center m-6 md:m-0">
        <button
          onClick={scrollToTop}
          className="px-4 py-2 bg-[#0f4c4d] text-white rounded hover:bg-[#196360] transition-colors duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          <CircleArrowUp className="w-4 h-4 mr-2 inline" />
          TOP
        </button>
      </div>
    </div>
  );
}

export default contact;
