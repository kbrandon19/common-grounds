import { defineType } from "sanity";

export const comboFoodMenu = defineType({
  name: "plateItems",
  title:'plate Items',
  type: "object",
  fields: [
    {name:'dishPhoto',
      title:'Dish Photo',
      type:'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishName",
      title:'Dish Name',
      type:'string',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name:'dishDescription',
      title:"Dish Description",
      type:'string',
      validation: (Rule) => Rule.required(),
    },
    {
        name:'price',
        title:"Price",
        type:'string',
        validation: (Rule) => Rule.required(),
      },
  ],
});
