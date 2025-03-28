"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { Menu } from "@/lib/interface";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

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
    return <div className="text-center py-20">Loading menu...</div>;
  }

  return (
    <div className="h-full w-full">
      {/* Section Title */}
      <div className="text-center py-8">
        <div className="mb-10">
          <h3 className="text-sm text-gray-500 uppercase">
            - {menuData.sectiontagline} -
          </h3>
          <h2 className="text-3xl font-bold">{menuData.sectiontitle}</h2>
        </div>
        <div className="w-lg text-2xl mx-auto">
          <p className="text-gray-700">{menuData.sectiontext}</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="w-full h-auto mt-4 p-10">
        {/* Category Selection */}
        <div className="w-3/4 mx-auto flex flex-wrap justify-center ">
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
