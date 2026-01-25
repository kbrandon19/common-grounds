// app/menu/MenuClient.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Skeleton } from "@/components/ui/skeleton";
import { urlForImage } from "@/sanity/lib/image";
import { Menu } from "@/lib/interface";

export default function MenuClient({ initialData }: { initialData: Menu }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialData.menusection[0]?.foodCategory || null
  );

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

  if (!initialData) {
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
      <div className="w-full h-auto mt-40">
        {/* Mobile Layout */}
        <div className="block lg:hidden relative px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 px-2">
              {initialData.menusection.map((category, index) => (
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
                        quality={70}
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
          {initialData.menusection.map((category) => (
            <div key={category.foodCategory} className="w-32 sm:w-40">
              <button
                onClick={() => setActiveCategory(category.foodCategory)}
                className={`flex flex-col items-center p-4 w-full transition-all cursor-pointer ${
                  activeCategory === category.foodCategory
                    ? "text-white font-bold greyscale-0 bg-[#9C002B] rounded-md"
                    : "text-gray-500 grayscale"
                }`}
              >
                <div className="w-10 h-10 flex justify-center items-center">
                  <Image
                    src={urlForImage(category.foodCategoryIcon)}
                    alt={category.foodCategory}
                    width={30}
                    height={30}
                    quality={70}
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
        <div className="w-3/4 mx-auto mt-16 h-auto space-y-4 pb-20">
          {initialData.menusection
            .filter((category) => category.foodCategory === activeCategory)
            .map((category) => (
              <div
                key={category.foodCategory}
                className="grid md:grid-cols-2 gap-4"
              >
                {category.plate?.map((dish) => (
                  <div
                    key={dish.dishName}
                    className="flex items-center flex-col  md:flex-row gap-y-4"
                  >
                    <div className="w-full h-52 relative rounded-md overflow-hidden">
                      <Image
                        src={urlForImage(dish.dishPhoto)}
                        alt={dish.dishName}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={70}
                        placeholder="empty"
                        className="object-cover md:object-cover"
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
