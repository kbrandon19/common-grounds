import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { AboutSection } from "@/lib/interface";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/app/components/RichTextComponents";

async function getData() {
  const query = `
      *[_type == 'about'][0] {
        sectiontagline,
        sectiontitle,
        sectiontext,
        bodyText,
        sectionImage,
        sideImage,
      }
    `;
  return await client.fetch(query);
}

async function About() {
  const data: AboutSection = await getData();

  return (
    <div className="w-full h-auto bg-[#9C002B]">
      <div className="">
        {/* Background Image Section */}
        <div
          className={`w-auto h-screen text-center flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-blend-darken ${
            data.sectionImage ? "" : "bg-gray-300"
          }`}
          style={{
            backgroundImage: data.sectionImage
              ? `url(${urlForImage(data.sectionImage)})`
              : "none",
          }}
        >
          <div className="mb-10">
            <h3 className="text-center text-sm text-white uppercase">
              - {data.sectiontagline} -
            </h3>
          </div>
          <p className="text-9xl text-white font-bold">{data.sectiontitle}</p>
        </div>
      </div>
      
      <div className=" w-auto h-auto ">
        <div className="max-w-4xl h-auto  mx-auto my-30">
          <PortableText value={data.bodyText} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
}

export default About;
