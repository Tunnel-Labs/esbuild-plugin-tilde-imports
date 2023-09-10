import tildeImportPlugin from "../../../../src/index.js";
import Bun from "bun";

Bun.build({
  entrypoints: ["../src/index.ts"],
  outdir: "../dist",
  plugins: [tildeImportPlugin],
});
