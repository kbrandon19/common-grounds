export const revalidate = 0;

import React from "react";
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

export default async function MenuPage() {
  const data: Menu = await getData();

  return (
    <div className="h-full w-full ">
      {/* Section Header */}
      <div className="text-center py-8">
        <div className="mb-10">
          <h3 className="text-sm text-gray-500 uppercase">
            - {data.sectiontagline} -
          </h3>
          <h2 className="text-3xl font-bold">{data.sectiontitle}</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700">{data.sectiontext}</p>
        </div>
      </div>


<div className="w-full bg-white p-10">

  {/* Menu Sections */}
      <div className="w-3/4 mx-auto h-full bg-pink-300 flex flex-row justify-center">
        {data.menusection.map((category, index) => (
          <div
            key={index}
            className="bg-red-200 flex justify-center items-center px-8"
          >
            {/* Category Title */}
            <div className="w-auto h-auto flex flex-col items-center gap-2">
              <Image
                src={urlForImage(category.foodCategoryIcon)}
                alt={category.foodCategory}
                width={25}
                height={25}
              />
              <h3 className="text-sm font-normal">{category.foodCategory}</h3>
            </div>
          </div>
        ))}
        </div>
<div>
  {/* Menu Items */}
  {data.menusection.map((category, index) => (
    <div key={index} className="mb-10">


      {/* Grid Layout for Dishes */}
      <div className="grid md:grid-cols-2 gap-8">
        {category.plate?.map((dish, dishIndex) => (
          <div key={dishIndex} className="flex items-center gap-4">
            <Image
              src={urlForImage(dish.dishPhoto)}
              alt={dish.dishName}
              width={100}
              height={100}
              className="rounded-md"
            />
            
            <div>
              <h4 className="text-lg font-bold">{dish.dishName}</h4>
              <p className="text-sm text-gray-600">{dish.dishDescription}</p>
              <p className="text-md font-semibold mt-1">${dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
  
  ))}
</div>

      

                   {/* Dishes */}
            {/* <div className="grid md:grid-cols-2 gap-4 mt-4">
              {menusection.category.plate && Array.isArray(category.plate) ? (
                category.plate.map((dish, dishIndex) => (
                  <div
                    key={dishIndex}
                    className="border p-4 rounded-lg shadow-md"
                  >
                    <Image
                      src={urlForImage(dish.dishPhoto)}
                      alt={dish.dishName}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                    <h4 className="text-lg font-bold mt-2">{dish.dishName}</h4>
                    <p className="text-sm text-gray-600">
                      {dish.dishDescription}
                    </p>
                    <p className="text-md font-semibold mt-2">{dish.price}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No dishes available</p>
              )}
            </div> */}
      </div>
      </div>
    
  );
}
