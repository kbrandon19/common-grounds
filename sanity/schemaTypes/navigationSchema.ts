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
});
