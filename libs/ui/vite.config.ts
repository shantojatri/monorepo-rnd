import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
import path from "path";
export default defineConfig(async () => {
  const vue = (await import("@vitejs/plugin-vue")).default;
  return {
    plugins: [vue(), tailwindcss()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "ui",
        fileName: "index",
      },
      rollupOptions: {
        external: ["vue"],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // "@components": path.resolve(__dirname, "./src/components"),
      },
    },
    server: {
      fs: {
        allow: [".."],
      },
    },
  };
});
