import {
  StructureResolver,
  DefaultDocumentNodeResolver
} from "sanity/structure";
import { GearIcon } from "@radix-ui/react-icons";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(GearIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        (document) => document.getId() !== "siteSettings"
      )
    ]);

export default structure;
