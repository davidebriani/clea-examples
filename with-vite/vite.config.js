import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: "src/index.js",
        formats: ["es"],
        fileName: "app",
      },
    },
    preview: {
      open: "app.js",
    },
  };
});
