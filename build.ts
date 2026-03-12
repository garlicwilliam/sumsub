import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'node',
    target: 'node16', // or higher depending on your runtime
    format: 'cjs', // CommonJS as requested
    minify: false, // Set to true if you want minified code for production
    sourcemap: true,
  })
  .catch(() => process.exit(1));
