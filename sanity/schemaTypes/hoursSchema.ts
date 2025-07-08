import { defineType, defineField } from "sanity";

export const hoursSchema = defineType({
  name: "hours",
  title: "Hours",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true, // hides the title field
      readOnly: true,
      initialValue: "Hours",
    }),
    defineField({
      name: "storeHours",
      title: "Store Hours",
      type: "array",
      of: [{ type: "storeSchedule" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "Hours",
      };
    },
  },
});
