import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "3r36vov4",
  dataset: "production",
  title: "Sandy Sanity Blog",
  basePath: "/admin",
  apiVersion: "2024-06-09",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
