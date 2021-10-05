import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import cssModules from 'rollup-plugin-react-scoped-css';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [react(), cssModules()],
  resolve: {
    alias: {
      'components': resolve(__dirname, 'src/components'),
      'pages': resolve(__dirname, 'src/pages'),
      'services': resolve(__dirname, 'src/services'),
      'utilities': resolve(__dirname, 'src/utilities')
    }
  },
  server: {
    fs: {
      strict: true
    },
    proxy: {
      // put url for the API here
      // '/api': {
      //   target: 'https://localhost:5001',
      //   secure: false
      // }
    }
  }
});
