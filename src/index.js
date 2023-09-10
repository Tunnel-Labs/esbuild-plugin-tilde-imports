import { createTildeImportExpander } from "tilde-imports";

export default function tildeImportsPlugin({ monorepoDirpath }) {
  const expandTildeImport = createTildeImportExpander({
    monorepoDirpath,
  });

  return {
    name: "bun-plugin-tilde-imports",
    setup(build) {
      build.onResolve({ filter: /^~/ }, (args) => {
        return {
          path: expandTildeImport({
            importSpecifier: args.path,
            importerFilepath: args.importer,
          }),
        };
      });
    },
  };
}
