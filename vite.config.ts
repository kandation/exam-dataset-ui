import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const x__dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line
export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $stores: resolve(x__dirname, "./src/stores"),
      $components: resolve(x__dirname, "./src/libs/components"),
      $type: resolve(x__dirname, "./src/libs/types"),
    },
  },
});