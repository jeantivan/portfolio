import {
  StructureResolver,
  DefaultDocumentNodeResolver
} from "sanity/structure";
import { CogIcon } from "@sanity/icons";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      ...S.documentTypeListItems().filter(
        (document) => document.getId() !== "siteSettings"
      )
    ]);

export default structure;
