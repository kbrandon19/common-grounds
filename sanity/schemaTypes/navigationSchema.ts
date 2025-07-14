import { defineType, defineField } from "sanity";

export const navigationSchema = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true, // hides the title field
      readOnly: true,
      initialValue: "Navigation",
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
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "social" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "Navigation",
      };
    },
  },
  
});
