#!/usr/bin/env node

import tildeImportPlugin from '../../../../src/index.js';
import { getMonorepoDirpath } from 'get-monorepo-root';
import * as esbuild from 'esbuild';
import { join } from 'desm';

await esbuild.build({
	bundle: true,
	entryPoints: [join(import.meta.url, '../src/index.ts')],
	outdir: join(import.meta.url, '../dist'),
	plugins: [
		tildeImportPlugin({ monorepoDirpath: getMonorepoDirpath(import.meta.url) })
	]
});
