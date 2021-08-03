import { resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import lessToJS from 'less-vars-to-js';
import styleImport from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';

const themeVariables = lessToJS(
  readFileSync(resolve(__dirname, './src/styles/antd.customize.less'), 'utf8'),
);

const needAnalyze = process.env.analyze === 'true';

export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: {
      '/@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8000,
  },
  build: {
    rollupOptions: {
      plugins: [needAnalyze && visualizer({ open: true })],
    },
  },
});
