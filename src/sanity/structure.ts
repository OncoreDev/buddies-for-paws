import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items(
      S.documentTypeListItems().map((listItem) => {
        return orderableDocumentListDeskItem({
          type: listItem.getId() ?? "",
          title: listItem.getTitle() || (listItem.getId() ?? ""),
          S,
          context,
        });
      }),
    );
