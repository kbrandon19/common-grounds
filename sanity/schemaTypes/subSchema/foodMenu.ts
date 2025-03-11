import { defineType,defineField } from "sanity";

export const foodMenu = defineType({
  name: "menuItems",
  title:'Menu Items',
  type: "object",
  fields: [
    {
      name: "foodCategoryIcon",
      title:'Food Category Icon',
      type:'image'
    },
    {
      name:'foodCategory',
      title:"Food Category",
      type:'string',
      description:'Burgers, Omlettes, Sanwiches, etc.'
    },
    defineField({
            name:'plate',
            title:'Plate',
            type:'array',
            of:[{type:'plateItems'}]
        })
  ],
});
