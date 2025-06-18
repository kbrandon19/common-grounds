'use client';

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
      navigationlinks[] { linkname }
    }
  `;
  const data: Navigation = await client.fetch(query);
  return data;
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Navigation | null>(null);

  useEffect(() => {
    getData().then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="text-black w-full h-auto px-6 py-4 absolute z-10">
      <div className="w-auto h-auto px-2 flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              height={75}
              width={75}
              src={urlForImage(data.logo)}
              alt="Common Grounds Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {data.navigationlinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={`/${link.linkname}`}
                  className="text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
                >
                  {link.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
          >
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
              className="space-y-8 text-2xl font-semibold"
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
                    href={`/${link.linkname}`}
                    onClick={() => setIsOpen(false)}
                    className="uppercase"
                  >
                    {link.linkname}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
