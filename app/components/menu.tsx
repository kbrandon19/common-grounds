"use client";

import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../sanity/lib/client";
import { Menu } from "@/lib/interface";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { urlForImage } from "../../sanity/lib/image";
import useEmblaCarousel from "embla-carousel-react";

async function getData() {
  const query = `
    *[_type == 'menu'][0] {
      menusection[]{
        foodCategory,
        foodCategoryIcon,
        plate[]{
          dishPhoto,
          dishName,
          dishDescription,
          price
        }
      }
    }
  `;
  return await client.fetch(query);
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState<Menu | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  // Keyboard arrow scroll support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!emblaApi) return;
      if (event.key === "ArrowLeft") emblaApi.scrollPrev();
      if (event.key === "ArrowRight") emblaApi.scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  const scrollToCategory = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    async function fetchMenu() {
      const data = await getData();
      setMenuData(data);
      setActiveCategory(data.menusection[0]?.foodCategory || null);
    }
    fetchMenu();
  }, []);

// Skeleton 
  if (!menuData) {
    return (

      
      <div className="p-10 space-y-10">
        <div className="flex justify-center">
          <div className="flex gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 mx-auto my-16 min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-[175px] w-[175px] rounded-md" />
                <div className="space-y-3 w-full">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    );
  }

  return (
    <div className="h-full w-full">
      <div className="w-full h-auto mt-40 ">
        {/* Mobile Layout */}
        <div className="block lg:hidden relative px-4">
          {/* Fading gradient overlays */}
          {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" /> */}

          {/* Embla carousel container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 px-2">
              {menuData.menusection.map((category, index) => (
                <div
                  key={category.foodCategory}
                  className="flex-shrink-0 w-32"
                  onClick={() => {
                    setActiveCategory(category.foodCategory);
                    scrollToCategory(index);
                  }}
                >
                  <button
                    className={`flex flex-col items-center p-2 w-full transition-all cursor-pointer ${
                      activeCategory === category.foodCategory
                        ? "text-white font-bold bg-[#9C002B] rounded-md"
                        : "text-gray-500"
                    }`}
                  >
                    <div className="w-10 h-10 flex justify-center items-center">
                      <Image
                        src={urlForImage(category.foodCategoryIcon)}
                        alt={category.foodCategory}
                        width={30}
                        height={30}
                        className={`transition-transform ${
                          activeCategory === category.foodCategory
                            ? "scale-110 shadow-xl"
                            : "scale-100"
                        }`}
                      />
                      
                    </div>
                    <h3 className="text-sm text-center mt-2">
                     
                      {category.foodCategory}
                    </h3>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-start gap-4 w-full max-w-screen-xl mx-auto px-6">
          {menuData.menusection.map((category) => (
            <div key={category.foodCategory} className="w-32 sm:w-40">
              <button
                onClick={() => setActiveCategory(category.foodCategory)}
                className={`flex flex-col items-center p-4 w-full transition-all cursor-pointer ${
                  activeCategory === category.foodCategory
                    ? "text-white font-bold bg-[#9C002B] rounded-md"
                    : "text-gray-500"
                }`}
              >
                <div className="w-10 h-10 flex justify-center items-center">
                      <Image
                        src={urlForImage(category.foodCategoryIcon)}
                        alt={category.foodCategory}
                        width={30}
                        height={30}
                        className={`transition-transform ${
                          activeCategory === category.foodCategory
                            ? "scale-110 shadow-xl"
                            : "scale-100"
                        }`}
                      />
                    </div>
                <h3 className="text-sm text-center mt-2">
                  
                  {category.foodCategory}
                </h3>
              </button>
            </div>
          ))}
        </div>

        {/* Food Items */}
        <div className="w-3/4 mx-auto mt-16 h-auto  space-y-4 pb-20">
          {menuData.menusection
            .filter((category) => category.foodCategory === activeCategory)
            .map((category) => (
              <div
                key={category.foodCategory}
                className="grid md:grid-cols-2 gap-4"
              >
                {category.plate?.map((dish) => (
                  <div
                    key={dish.dishName}
                    className="flex items-center flex-col md:flex-row gap-y-4"
                  >
                    <div className="w-full h-36  relative rounded-md overflow-hidden">
                      <Image
                        src={urlForImage(dish.dishPhoto)}
                        alt={dish.dishName}
                        fill
                        className="object-cover md:object-contain"
                      />
                    </div>
                    <div className="w-full mx-auto text-left">
                      <h4 className="text-lg font-bold">{dish.dishName}</h4>
                      <p className="w-full text-md text-gray-600">
                        {dish.dishDescription}
                      </p>
                      <p className="text-md font-semibold mt-1">{dish.price}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
