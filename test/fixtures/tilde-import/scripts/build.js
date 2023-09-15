#!/usr/bin/env node

import tildeImportPlugin from '../../../../src/index.js';
import { getMonorepoDirpath } from 'get-monorepo-root';
import * as esbuild from 'esbuild';
import { join } from 'desm'

await esbuild.build({
	entryPoints: ['../src/index.ts'],
	outdir: '../dist',
	plugins: [
		tildeImportPlugin({ monorepoDirpath: getMonorepoDirpath(import.meta.url) })
	]
});
