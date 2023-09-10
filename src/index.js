import { createTildeImportExpander } from "tilde-imports";
import { getMonorepoDirpath } from "get-monorepo-root";

/** @type {import('bun').BunPlugin} */
const tildeImportsPlugin = {
  name: "bun-plugin-tilde-imports",
  setup(build) {
    const monorepoDirpath = getMonorepoDirpath(__dirname);
    if (monorepoDirpath === undefined) {
      throw new Error("Could not get monorepo dirpath");
    }

    const expandTildeImport = createTildeImportExpander({
      monorepoDirpath,
    });

    build.onResolve({ filter: /^~/ }, (args) => {
      return {
        path: expandTildeImport({
          importSpecifier: args.path,
          importerFilepath: args.importer,
        }),
        namespace: "glob-imports",
      };
    });
  },
};

export default tildeImportsPlugin;
