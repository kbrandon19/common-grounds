import { defineType, defineField } from "sanity";

export const contactSchema = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
        name: "whatsappNumber",
        title: "WhatsApp",
        type: "number",
      }),
      defineField({
        name: "sectiontext",
        title: "Section text",
        type: "string",
      }),
      defineField({
        name:'hours',
        title:'hours',
        type:'array',
        of:[{type:'storeHours'}]
      })

  ],
});
