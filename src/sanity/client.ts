import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a5fs5e8w",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
