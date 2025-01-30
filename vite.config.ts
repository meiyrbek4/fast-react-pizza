import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from "vite-plugin-eslint";
import tainwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import {ManifestOptions, VitePWA} from "vite-plugin-pwa"


const manifest: Partial<ManifestOptions> = {
  "theme_color":"#facc15",
  "background_color":"#ffffff",
  "icons":[{
    "purpose":"maskable",
    "sizes":"512x512",
    "src":"icon512_maskable.png",
    "type":"image/png"
  },
  {
    "purpose":"any",
    "sizes":"512x512",
    "src":"icon512_rounded.png",
    "type":"image/png"
  }],
  "screenshots": [{
    "src": "/screenshots/desktop.png",
    "type": "image/png",
    "sizes": "2880x1550",
    "form_factor": "wide",
  },
  {
    "src": "/screenshots/mobile.png",
    "type": "image/png",
    "sizes": "794x1376",
    "form_factor": "narrow",
  }],
  "orientation":"any",
  "display":"standalone",
  "lang":"en",
  "name":"Fast React Pizza",
  "short_name":"RPizza",
  "start_url":"/"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ["**/*.{html,css,js,svg,ico,png,jpg}"]
    },
    manifest: manifest,
  })],
  css: {
    postcss: {
      plugins: [tainwindcss(), autoprefixer()]
    }
  }
});
