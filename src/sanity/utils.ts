import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "./api";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || ""
});

export const urlForImage = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder.image(source).auto("format").fit("max");
};
