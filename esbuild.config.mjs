import esbuild from "esbuild";
import process from "process";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const prod = process.argv[2] === "production";

esbuild
  .build({
    banner: {
      js: banner,
    },
    entryPoints: ["src/index.ts"],
    bundle: true,
    external: [],
    format: "cjs",
    target: "es2018",
    logLevel: "info",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    outfile: "dist/index.js",
    minify: true,
  })
  .catch(() => process.exit(1));
