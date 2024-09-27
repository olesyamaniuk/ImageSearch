// import { defineConfig } from 'vite';
// import glob from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig(({ command }) => {
//   return {
//     define: {
//       [command === 'serve' ? 'global' : '_global']: {},
//     },
//     root: 'src',
//     build: {
//       sourcemap: true,

//       rollupOptions: {
//         input: glob.sync('/src/index.html'),
//         output: {
//           manualChunks(id) {
//             if (id.includes('node_modules')) {
//               return 'vendor';
//             }
//           },
//           entryFileNames: 'commonHelpers.js',
//         },
//       },
//       outDir: '../dist',
//     },
//     plugins: [react(), injectHTML(), FullReload(['./src/**/**.html'])],
//   };
// });

// import { defineConfig } from 'vite';
// import glob from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig(({ command }) => {
//   return {
//     define: {
//       [command === 'serve' ? 'global' : '_global']: {},
//     },
//     root: 'src',
//     build: {
//       sourcemap: true,
//       rollupOptions: {
//         input: glob.sync('/src/index.html'), // Ensure this path matches your HTML files
//         output: {
//           manualChunks(id) {
//             if (id.includes('node_modules')) {
//               return 'vendor';
//             }
//           },
//           entryFileNames: 'commonHelpers.js',
//         },
//       },
//       outDir: '../dist',
//     },
//     plugins: [react(), injectHTML(), FullReload(['./src/**/**.html'])],
//   };
// });


import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Ensure this line is present

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: path.resolve(__dirname, './src/index.html'), // Directly pointing to the HTML file
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [react(), injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
