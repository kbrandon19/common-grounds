import { defineType, defineField } from "sanity";

export const menuSchema = defineType({
  name: "foodmenu",
  title: "Food Menu",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "sectiontitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "sectiontext",
      title: "Section text",
      type: "string",
    }),
    defineField({
        name:'foodsectionIcons',
        title:'Food Section Icons',
        type:'array',
        of:[{type:'foodLabel'}]
    })
  ],
});
