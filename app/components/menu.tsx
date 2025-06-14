"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { Menu } from "@/lib/interface";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Carousel, CarouselContent, CarouselItem,CarouselNext,
  CarouselPrevious, } from "@/components/ui/carousel"

async function getData() {
  const query = `
    *[_type == 'menu'][0] {
      sectiontagline,
      sectiontitle,
      sectiontext,
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

  useEffect(() => {
    async function fetchMenu() {
      const data = await getData();
      setMenuData(data);
      setActiveCategory(data.menusection[0]?.foodCategory || null);
    }
    fetchMenu();
  }, []);

  if (!menuData) {
    return <div className="text-center pb-20">Loading menu...</div>;
  }

  return (
    <div className="h-full w-full">
   {/* <div className="flex items-center justify-center">
      background pattern 
     <div className="absolute -z-2 w-full h-64">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
     
      </div>

      New section title 
      <div className=" w-full text-center text-black md:text-white py-10 2xl:pb-40 h-auto ">
             
          <h3 className="text-xs uppercase pb-4">
            - {menuData.sectiontagline} -
          </h3>
          <h2 className="text-5xl font-bold ">{menuData.sectiontitle}</h2>
        </div>
   </div> */}
   <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
  {/* SVG background pattern */}
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
        d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  </div>

  {/* Centered section text */}
  <div className="text-center text-white px-4">
    <h3 className="text-xs uppercase pb-2">- {menuData.sectiontagline} -</h3>
    <h2 className="text-4xl md:text-5xl font-bold">{menuData.sectiontitle}</h2>
  </div>
</div>



      {/* Old Section Title */}
      <div className="text-center py-8">
        {/* <div className=" w-full h-auto mb-20">
             
          <h3 className="text-sm text-gray-500 uppercase">
            - {menuData.sectiontagline} -
          </h3>
          <h2 className="text-3xl font-bold">{menuData.sectiontitle}</h2>
        </div> */}
        <div className="w-lg text-2xl mx-auto">
          <p className="text-gray-700">{menuData.sectiontext}</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="w-full h-auto mt-4 p-10">
        {/* Category Selection */}
        {/* <div className="w-3/4 mx-auto flex  justify-center ">
          {menuData.menusection.map((category) => (
            <button
              key={category.foodCategory}
              onClick={() => setActiveCategory(category.foodCategory)}
              className={`flex flex-col items-center p-4  transition-all w-40  cursor-pointer  ${
                activeCategory === category.foodCategory ? "text-black font-bold" : "text-gray-500"
              }`}
            >
              <div className="w-16 h-16 flex justify-center items-center">
                <Image
                  src={urlForImage(category.foodCategoryIcon)}
                  alt={category.foodCategory}
                  width={40}
                  height={40}
                  className={`transition-transform hover:drop-shadow-md ${
                    activeCategory === category.foodCategory ? "scale-120 shadow-xl" : "scale-100"
                  }`}
                />
              </div>
              <h3 className="text-sm text-center mt-2">{category.foodCategory}</h3>
            </button>
          ))}
        </div> */}


        <div className="block lg:hidden">
  <Carousel className="relative w-full mx-auto">
    <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" />
    <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10" />
    <CarouselContent className="flex">
      {menuData.menusection.map((category) => (
        <CarouselItem key={category.foodCategory} className="basis-auto">
          <button
            onClick={() => setActiveCategory(category.foodCategory)}
            className={`flex flex-col items-center p-2 w-32 sm:w-40 lg:w-full transition-all cursor-pointer ${
              activeCategory === category.foodCategory ? "text-black font-bold" : "text-gray-500"
            }`}
          >
            <div className="w-10 h-10 flex justify-center items-center ">
              <Image
                src={urlForImage(category.foodCategoryIcon)}
                alt={category.foodCategory}
                width={30}
                height={30}
                className={`transition-transform hover:drop-shadow-md ${
                  activeCategory === category.foodCategory ? "scale-110 shadow-xl" : "scale-100"
                }`}
              />
            </div>
            <h3 className="text-sm text-center mt-2">{category.foodCategory}</h3>
          </button>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

{/* Full-width static layout (Desktop and up) */}
<div className="hidden lg:flex justify-center gap-4 flex-wrap w-full max-w-screen-xl mx-auto px-6">
  {menuData.menusection.map((category) => (
    <div key={category.foodCategory} className="w-32 sm:w-40">
                <button
            onClick={() => setActiveCategory(category.foodCategory)}
            className={`flex flex-col items-center p-4 w-32 sm:w-40 lg:w-full transition-all cursor-pointer ${
              activeCategory === category.foodCategory ? "text-black font-bold" : "text-gray-500"
            }`}
          >
            <div className="w-16 h-16 flex justify-center items-center">
              <Image
                src={urlForImage(category.foodCategoryIcon)}
                alt={category.foodCategory}
                width={40}
                height={40}
                className={`transition-transform hover:drop-shadow-md ${
                  activeCategory === category.foodCategory ? "scale-110 shadow-xl" : "scale-100"
                }`}
              />
            </div>
            <h3 className="text-sm text-center mt-2">{category.foodCategory}</h3>
          </button>
    </div>
  ))}
</div>






        {/* Food Items */}
        <div className="w-3/4 mx-auto my-16 min-h-[400px]">
          {menuData.menusection
            .filter((category) => category.foodCategory === activeCategory)
            .map((category) => (
              <div
                key={category.foodCategory}
                className="grid md:grid-cols-2 gap-2 transition-opacity duration-300"
              >
                {category.plate?.map((dish) => (
                  <div key={dish.dishName} className="flex items-center gap-4 ">
                    <Image
                      src={urlForImage(dish.dishPhoto)}
                      alt={dish.dishName}
                      width={175}
                      height={175}
                      className="rounded-md"
                    />
                    <div className="max-w-md">
                      <h4 className="text-lg font-bold">{dish.dishName}</h4>
                      <p className="text-sm text-gray-600">{dish.dishDescription}</p>
                      <p className="text-md font-semibold mt-1">${dish.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
