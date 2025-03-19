import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Common Grounds")
    .items([
      // Exclude "navigation", "about", and "contact" from the document list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["hero","navigation", "about", "contact","menu"].includes(listItem.getId() ?? "")
      ),

      S.divider(),

      // Add Navigation as a separate section
      S.listItem()
        .title("Hero")
        .child(S.editor().schemaType("hero").documentId("hero")),
      S.listItem()
        .title("Navigation")
        .child(S.editor().schemaType("navigation").documentId("navigation")),
      S.listItem()
        .title("About ")
        .child(S.editor().schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact")
        .child(S.editor().schemaType("contact").documentId("contact")),
        S.listItem()
        .title("Menu")
        .child(S.editor().schemaType("menu").documentId("menu")),
    ]);
