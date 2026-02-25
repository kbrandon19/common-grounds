export const revalidate = 0;

import React from "react";
import { client } from "../../../sanity/lib/client";
import { Contact } from "@/lib/interface";

async function getData() {
  const query = `*[_type == 'contact'][0]{
sectiontitle,sectiontext
}`;

  return client.fetch<Contact>(query);
}

export default async function ContactBanner() {
  const data: Contact = await getData();
  return (
    <div>
      <div className="w-full h-120 pt-0 flex flex-col items-top justify-start bg-[#0f4c4d] ">
        <div className="w-full lg:w-2/3 h-auto mx-auto text-center text-white p-4 md:p-0">
          <h3 className="text-xs uppercase pb-2 ">- {data.sectiontitle} -</h3>
          <h2 className="text-3xl md:text-5xl font-bold p-2 md:p-0">
            {data.sectiontext}
          </h2>
        </div>
      </div>
    </div>
  );
}
