import { defineType } from "sanity";

export const storeScheduleSchema = defineType({
  name: "storeSchedule",
  title:'Store Schedule',
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