import { defineType, defineField } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
      }),
      defineField({
        name: "sectiontext",
        title: "Section text",
        type: "string",
      }),
      defineField({
        name:'hours',
        title:'hours',
        type:'array',
        of:[{type:'storeHours'}]
      })

  ],
});
