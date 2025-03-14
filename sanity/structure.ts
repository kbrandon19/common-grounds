import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Common Grounds")
    .items([
      // Exclude "navigation" from the document list before adding it separately
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "navigation",
        "about",
        "contact",
      ),

      S.divider(),

      // Add Navigation as a separate section
      S.listItem()
        .title("Navigation Section")
        .child(S.editor().schemaType("navigation").documentId("navigation")),
      S.listItem()
        .title("About Section")
        .child(S.editor().schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact Section")
        .child(S.editor().schemaType("contact").documentId("contact")),
    ]);
