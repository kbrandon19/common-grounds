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
        backgroundImg
      }
    `;

    return await client.fetch(query);
}

async function About() {
    const data: AboutSection = await getData();

    return (
        <div className="w-full h-auto">
            <div className="py-8">
                <div className="mb-10">
                    <h3 className="text-center text-sm text-gray-500 uppercase">
                        - {data.sectiontagline} -
                    </h3>
                </div>

                {/* Background Image Section */}
                <div 
  className={`w-auto h-86 text-center flex justify-center items-center bg-cover bg-center bg-no-repeat ${data.backgroundImg ? '' : 'bg-gray-300'}`}
  style={{
    backgroundImage: data.backgroundImg ? `url(${urlForImage(data.backgroundImg)})` : 'none'
  }}
>
                    <h1>{data.sectiontitle}</h1>
                </div>
            </div>
            <div>
            <PortableText value={data.bodyText} components={RichTextComponents} />
            console.log("Background Image Data:", data.backgroundImg);

            </div>
        </div>
    );
}

export default About;
