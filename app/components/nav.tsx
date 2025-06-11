export const revalidate = 0;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { Navigation } from "@/lib/interface";
import { urlForImage } from "../../sanity/lib/image";

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

async function Nav() {
  const data: Navigation = await getData();

  return (
    <div className="text-black  w-full h-auto px-10 py-4 absolute z-10">
      <div className="w-auto h-auto  px-4 flex flex-row justify-between items-center">
        
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
          <ul className="flex space-x-4">
            {data.navigationlinks.map((link, idx) => (
              <li key={idx}>
                <Link href={`${link.linkname}`} className="text-sm uppercase tracking-wide transition-colors">
                  {link.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <ul className="flex space-x-4">
            {/* {data.navigationlinks.map((link, idx) => (
              <li key={idx}>
                <Link href={`${link.linkname}`} className="uppercase tracking-wide transition-colors">
                  {link.linkname}
                </Link>
              </li>
            ))} */}
            <li>_</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
