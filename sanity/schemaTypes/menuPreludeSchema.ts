import { defineType, defineField } from "sanity";

export const menuPreludeSchema = defineType({
  name: "menuPrelude",
  title: "Menu Prelude",
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
      name: "sectiontext",
      title: "Section text",
      type: "string",
    }),
  ],
});
