"use client";

import { CircleArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="px-4 py-2 bg-[#0f4c4d] text-white rounded hover:bg-[#196360] transition-colors duration-200 cursor-pointer"
      aria-label="Back to top"
    >
      <CircleArrowUp className="w-4 h-4 mr-2 inline" />
      TOP
    </button>
  );
}