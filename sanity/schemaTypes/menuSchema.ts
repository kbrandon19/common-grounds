import { defineType, defineField } from "sanity";

export const menuSchema = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true, // hides the title field
      readOnly: true,
      initialValue: "Food Menu",
    }),
    defineField({
        name:'menusection',
        title:'Menu Section',
        type:'array',
        of:[{type:'menuItems'}]
    })
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "Food Menu",
      };
    },
  },
});
