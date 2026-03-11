import { defineType, defineField } from "sanity";

export const storeScheduleSchema = defineType({
  name: "storeSchedule",
  title: "Store Schedule",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Day",
      type: "string",
    }),
    defineField({
      name: "openHours",
      title: "Open Hours",
      type: "string",
      placeholder: "08:00",
      validation: (Rule) =>
        Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/).error(
          "Please enter a valid time in HH:MM format (e.g. 08:00)"
        ),
    }),
    defineField({
      name: "closeHours",
      title: "Close Hours",
      type: "string",
      placeholder: "14:00",
      validation: (Rule) =>
        Rule.regex(/^([01]\d|2[0-3]):([0-5]\d)$/).error(
          "Please enter a valid time in HH:MM format (e.g. 14:00)"
        ),
    }),
  ],
});