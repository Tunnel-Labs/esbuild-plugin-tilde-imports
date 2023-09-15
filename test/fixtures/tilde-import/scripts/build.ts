import tildeImportPlugin from '../../../../src/index.js';
import { getMonorepoDirpath } from 'get-monorepo-root';
import * as esbuild from 'esbuild';

esbuild.build({
	entryPoints: ['../src/index.ts'],
	outdir: '../dist',
	plugins: [
		tildeImportPlugin({ monorepoDirpath: getMonorepoDirpath(__dirname) })
	]
});
