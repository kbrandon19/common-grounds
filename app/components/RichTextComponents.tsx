// import Image from 'next/image';
// import Link from 'next/link';

// import { urlForImage } from "../../sanity/lib/image";

// import PortableText from "@/portabletext/react"

// export const RichTextComponents = {
//     block:{
//         normal:({children}:any) => (
//             <p className="text-base xl:text-lg">{children}</p>
//         )
//     }
// }
import { PortableTextReactComponents } from "@portabletext/react";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="text-base xl:text-4xl font-medium text-slate-200 leading-15">{children}</p>,
  },
};
