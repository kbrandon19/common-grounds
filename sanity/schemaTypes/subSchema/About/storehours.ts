import { defineType } from "sanity";

export const storeHours = defineType({
  name: "storeHours",
  title:'Store Hours',
  type: "object",
  fields: [
    {
      name: "day",
      title:'Day',
      type:'string'
    },
    {
      name:'openHours',
      title:"Open Hours",
      type:'number',
      description:"Format HHMM"
    },
    {
        name:'closeHours',
        title:"Close Hours",
        type:'number',
      },
  ],
});
