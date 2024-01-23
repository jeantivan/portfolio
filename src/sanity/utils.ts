import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "./client";

const builder = imageUrlBuilder(client);

export const imageFor = (source: SanityImageSource) => {
  return builder.image(source);
};
