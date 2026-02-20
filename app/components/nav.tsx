"use client";

export const revalidate = 0;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { Navigation } from "@/lib/interface";
import { urlForImage } from "../../sanity/lib/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

async function getData() {
  const query = `
    *[_type == 'navigation'][0] {
      title,
      logo,
      navigationlinks[] { linkname },
      socialMediaLinks[] {
        icon,
        socialName,
        socialLink
      }
    }
  `;
  const data: Navigation = await client.fetch(query);
  return data;
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Navigation | null>(null);
  const [navBgColor, setNavBgColor] = useState(false);

  useEffect(() => {
    getData().then(setData);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector('h1');
      if (!h1Element) return;

      const h1Rect = h1Element.getBoundingClientRect();
      const navHeight = 100; // Approximate nav height

      // If h1 top is above or near the nav area, set background color
      if (h1Rect.top < navHeight) {
        setNavBgColor(true);
      } else {
        setNavBgColor(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  return (
    <div className={`text-black w-full h-auto px-4 py-4 fixed z-10 transition-colors duration-300 ${
      navBgColor ? 'bg-[#9C002B]' : 'bg-transparent'
    }`}>
      <div className="w-auto h-auto px-4 2xl:px-16 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flextems-center">
          <Link href="/">
            <Image
              height={50}
              width={50}
              src={urlForImage(data.logo)}
              alt="Common Grounds Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {data.navigationlinks.map((link, idx) => (
              <li key={idx} className="text-white">
                <Link
                  href={`#${link.linkname}`}
                  className="text-md uppercase tracking-wide hover:text-[#6d001e] transition-colors"
                >
                  {link.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media  */}
        <div className=" hidden md:flex flex-row gap-x-4">

          {data.socialMediaLinks.map((link, idx) => (
            <div
              key={idx}
              className="w-12 h-12  flex items-center justify-center"
            >
              <Link
                href={link.socialLink}
                target="_blank"
              >
                <Image
                  src={urlForImage(link.icon)}
                  alt={link.socialName}
                  width={24}
                  height={24}
                  
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => {
              console.log('Toggling menu, current isOpen:', isOpen);
              setIsOpen(!isOpen);
            }}
            className={`p-2 cursor-pointer transition-colors ${
              isOpen ? 'text-black' : (navBgColor ? 'text-white' : 'text-black')
            }`}
          >
            {isOpen ? <X size={32}/> : <Menu size={32} className="text-white"/>}
          </button>
        </div>
      </div>

      {/* Animated Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col text-center items-center justify-center"
          >
            <div className="w-full h-screen absolute inset-x-0 top-0 z-0 bg-[url('/images/CGBackground.png')] bg-repeat bg-left-top opacity-50 bg-[length:1000px_auto] " />

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
                hidden: {
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
              className="space-y-8 text-3xl font-semibold text-[#9C002B] uppercase relative z-10"
            >
              {data.navigationlinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/#${link.linkname}`}
                    onClick={() => setIsOpen(false)}
                    className="uppercase"
                  >
                    {link.linkname}
                  </Link>
                </motion.li>
              ))}

              {/* Animated Social Media Icons */}
              <motion.li
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                  hidden: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto flex flex-row items-center gap-4 justify-center"
              >
                {data.socialMediaLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <Link href={link.socialLink} target="_blank">
                      <Image
                        src={urlForImage(link.icon)}
                        alt={link.socialName}
                        width={24}
                        height={24}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
