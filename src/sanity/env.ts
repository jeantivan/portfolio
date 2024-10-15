export const apiVersion =
  import.meta.env.SANITY_API_VERSION || "2024-01-01";

export const dataset = assertValue(
  import.meta.env.SANITY_DATASET,
  "Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
  import.meta.env.SANITY_PROJECT_ID,
  "Missing environment variable: SANITY_PROJECT_ID"
);

export const readToken = import.meta.env.SANITY_API_READ_TOKEN;

export const previewSecretDocumentId: `${string}.${string}` = "preview.secret";

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
