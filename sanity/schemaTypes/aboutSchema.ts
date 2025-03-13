import { defineType, defineField } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
        name: "sectiontitle",
        title: "Section Title",
        type: "string",
      }),
    defineField({
    name: "sectiontagline",
    title: "Section Tagline",
    type: "string",
  }),
    defineField({
        name:'backroundImg',
        title:'Background Image',
        type:'image',
    }),
    defineField({
        name:'bodyText',
        title:'Body Text',
        type:'string'
    })
  ],
});
