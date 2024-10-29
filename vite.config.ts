import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from "vite-plugin-eslint";
import tainwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tainwindcss(), autoprefixer()]
    }
  }
});
