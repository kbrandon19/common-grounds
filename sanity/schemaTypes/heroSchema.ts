import { defineType, defineField } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
          name: "title",
          title: "Title",
          type: "string",
          hidden: true, // hides the title field
          readOnly: true,
          initialValue: "Hero",
        }),
    defineField({
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
      }),
      defineField({
        name: "sectiontext",
        title: "Section text",
        type: "string",
      }),

  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "Hero",
      };
    },
  },
});
