import { defineType, defineField } from "sanity";

export const contactSchema = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
          name: "title",
          title: "Title",
          type: "string",
          hidden: true, // hides the title field
          readOnly: true,
          initialValue: "Contact",
        }),
      defineField({
        name: "sectiontitle",
        title: "Section Title",
        type: "string",
      }),
      defineField({
        name: "sectiontext",
        title: "Section text",
        type: "string",
      }),defineField({
        name: "whatsappNumber",
        title: "WhatsApp",
        type: "number",
      }),
      

  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: selection.title ?? "Contact",
      };
    },
  },
});
