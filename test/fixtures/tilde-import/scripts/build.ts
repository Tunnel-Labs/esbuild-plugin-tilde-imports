import tildeImportPlugin from "../../../../src/index.js";
import { getMonorepoDirpath } from "get-monorepo-root";
import Bun from "bun";

Bun.build({
  entrypoints: ["../src/index.ts"],
  outdir: "../dist",
  plugins: [
    tildeImportPlugin({ monorepoDirpath: getMonorepoDirpath(__dirname) }),
  ],
});
