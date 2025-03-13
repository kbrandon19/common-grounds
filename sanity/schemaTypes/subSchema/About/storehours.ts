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
      name:'openHour',
      title:"openHour",
      type:'datetime'
    },
    {
        name:'closeHour',
        title:"closeHour",
        type:'datetime',
        options: {
            timeFormat: 'HH:mm',
    
          }
      },
    // defineField({
    //         name:'plate',
    //         title:'Plate',
    //         type:'array',
    //         of:[{type:'plateItems'}]
    //     })
  ],
});
