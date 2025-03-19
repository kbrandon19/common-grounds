import { defineType, defineField } from "sanity";

export const navigationSchema = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name of the document",
      type: "string",
      
      
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "optional",
    }),
    defineField({
      name: "navigationlinks",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    select: {
      title: "title", // Now this field actually exists
      media: "logo",
    },
    prepare({ title, media }) {
      return {
        title: title || "No Title", // Fallback text
        media,
      };
    },
  },
});
