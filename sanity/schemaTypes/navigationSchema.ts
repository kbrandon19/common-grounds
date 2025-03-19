import { defineType, defineField } from "sanity";

export const navigationSchema = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "optional",
    }),
    defineField({
        name:'navigationlinks',
        title:'Navigation Links',
        type:'array',
        of:[{type:'link'}]
      }),
  ],
  preview: {
    select: {
      title: "title", // Custom title field
      media:"logo"
      
    },
    prepare({ title, media }) {
      return {
        title: title || "Untitled Document", // Displays the document's title
        media,
      };
   
    },
  },
  
});
