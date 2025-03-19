import { defineType, defineField } from "sanity";

export const menuSchema = defineType({
  name: "menu",
  title: "Menu",
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
    defineField({
        name:'menusection',
        title:'Menu Section',
        type:'array',
        of:[{type:'menuItems'}]
    })
  ],
});
