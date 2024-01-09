import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/map-widget/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    eslint(),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
    },
  },
});
