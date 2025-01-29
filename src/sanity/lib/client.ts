import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:
    "skKhsh4SZ5vJYZURQkgRxl1D9cQkT2zLwsTs94YPYetm5nkuzROsTOA5AOhLVvIzzEvs1MZMmSBUZZ0gppMKy693Ho7b3z5XSExLZT5fpfSb4wSDiALwHZkQpg5g5HjogJuAyBZaIiIy6GdV8mTMxQ6qrCiOe5fcztZmLtEk6XZfBQA13wl8",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
