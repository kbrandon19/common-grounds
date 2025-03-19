import { defineType, defineField } from "sanity";

export const contactSchema = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
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
      defineField({
        name:'hours',
        title:'Hours',
        type:'array',
        of:[{type:'storeHours'}]
      })

  ],
});
