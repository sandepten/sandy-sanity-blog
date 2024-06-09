import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "3r36vov4",
  dataset: "production",
  title: "Sandy Sanity Blog",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
