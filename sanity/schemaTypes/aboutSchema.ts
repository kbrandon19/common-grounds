import { defineType, defineField } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
          name: "title",
          title: "Title",
          type: "string",
          hidden: true, // hides the title field
          readOnly: true,
          initialValue: "About",
        }),
    defineField({
    name: "sectiontagline",
    title: "Section Tagline",
    type: "string",
  }),
    defineField({
        name: "sectiontitle",
        title: "Section Title",
        type: "string",
      }),
    
    defineField({
        name:'sectionImage',
        title:'Section Image',
        type:'image',
    }),
    defineField({
        name:'bodyText',
        title:'Body Text',
        type: 'array',
        of: [{type: 'block'}]
    }),
    defineField({
      name:'sideImage',
      title:'sideImage',
      type:"image"
    })
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "About",
      };
    },
  },
});
