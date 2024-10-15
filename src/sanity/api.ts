/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

export const dataset = assertValue(
  import.meta.env.SANITY_DATASET,
  "Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
  import.meta.env.PROJECT_ID,
  "Missing environment variable: SANITY_PROJECT_ID"
);

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion =
  import.meta.env.SANITY_API_VERSION || "2023-06-21";

// See the app/api/revalidate/route.ts for how this is used
export const revalidateSecret = import.meta.env.SANITY_REVALIDATE_SECRET;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = "/admin";
