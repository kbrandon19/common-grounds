import { defineType } from "sanity";

export const comboFoodMenu = defineType({
  name: "plateItems",
  title:'plate Items',
  type: "object",
  fields: [
    {name:'dishPhoto',
      title:'Dish Photo',
      type:'image'
    },
    {
      name: "dishName",
      title:'Dish Name',
      type:'string'
    },
    {
      name:'dishDescription',
      title:"Dish Description",
      type:'string'
    },
    {
        name:'price',
        title:"Price",
        type:'string'
      },
  ],
});
