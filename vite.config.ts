import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'FoodExpress',
        short_name: 'FoodExpress',
        theme_color: '#ffffff',
        icons: [{ src: 'favicon.ico', sizes: '64x64', type: 'image/x-icon' }]
      }
    })
  ],
  // ADD THIS SECTION TO ENABLE TAILWIND
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    host: true,
    port: 5173
  }
});