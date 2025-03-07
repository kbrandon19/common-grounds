import { defineType } from "sanity";

export const foodIcons = defineType({
  name: "foodLabel",
  title:'food Label',
  type: "object",
  fields: [
    {
      name: "label",
      title:'label',
      type:'image'
    },
  ],
});
