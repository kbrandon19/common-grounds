import { defineType, defineField } from "sanity";

export const menuSchema = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [

    defineField({
        name:'menusection',
        title:'Menu Section',
        type:'array',
        of:[{type:'menuItems'}]
    })
  ],
});
