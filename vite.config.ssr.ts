import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [
    solid({ solid: { omitNestedClosingTags: false, generate: "ssr" } }),
  ],
  build: {
    outDir: "distssr",
    target: "esnext",
    lib: {
      entry: "./src/libs.ts",
      formats: ["es"],
      name: "libs",
      fileName: "libs",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "solid-js",
          "solid-js/web": "solid-js/web",
        },
      },
      plugins: [
        typescript({
          declarationDir: "distssr",
          rootDir: "./src",
          exclude: ["index.tsx", "pages/*.tsx"],
        }),
      ],
    },
  },
});
