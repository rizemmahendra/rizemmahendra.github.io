import { defineConfig, AliasOptions } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const pathAlias: AliasOptions = [
  { find: "@components", replacement: resolve(__dirname, "./src/components") },
  { find: "@assets", replacement: resolve(__dirname, "./src/assets") },
  { find: "@constants", replacement: resolve(__dirname, "./src/constants") },
  { find: "@pages", replacement: resolve(__dirname, "./src/pages") },
  { find: "@services", replacement: resolve(__dirname, "./src/services") },
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: pathAlias },
  build: { outDir: "docs" },
});
