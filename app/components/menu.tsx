"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { Menu } from "@/lib/interface";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { urlForImage } from "../../sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  useEffect(() => {
    async function fetchMenu() {
      const data = await getData();
      setMenuData(data);
      setActiveCategory(data.menusection[0]?.foodCategory || null);
    }
    fetchMenu();
  }, []);

  if (!menuData) {
    return (
      <div className="p-10 space-y-10">
        {/* Top Carousel/Category Skeletons */}
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

        {/* Dish Cards Skeletons */}
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
      {/* Menu Section */}
      <div className="w-full h-auto mt-4 p-10">
        <div className="block lg:hidden">
          <Carousel className="relative w-full mx-auto">
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10" />
            <CarouselContent className="flex">
              {menuData.menusection.map((category) => (
                <CarouselItem
                  key={category.foodCategory}
                  className="basis-auto"
                >
                  <button
                    onClick={() => setActiveCategory(category.foodCategory)}
                    className={`flex flex-col items-center p-2 w-32 sm:w-40 lg:w-full transition-all cursor-pointer ${
                      activeCategory === category.foodCategory
                        ? "text-black font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    <div className="w-10 h-10 flex justify-center items-center ">
                      <Image
                        src={urlForImage(category.foodCategoryIcon)}
                        alt={category.foodCategory}
                        width={30}
                        height={30}
                        className={`transition-transform hover:drop-shadow-md ${
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
                  activeCategory === category.foodCategory
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                <div className="w-16 h-16 flex justify-center items-center">
                  <Image
                    src={urlForImage(category.foodCategoryIcon)}
                    alt={category.foodCategory}
                    width={40}
                    height={40}
                    className={`transition-transform hover:drop-shadow-md ${
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
                      <p className="text-sm text-gray-600">
                        {dish.dishDescription}
                      </p>
                      <p className="text-md font-semibold mt-1">
                        ${dish.price}
                      </p>
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
