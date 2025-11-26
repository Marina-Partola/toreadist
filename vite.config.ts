import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'

const manifest: Partial<ManifestOptions> = {
  theme_color: '#8936FF',
  background_color: '#ffb22e',
  icons: [
    { purpose: 'maskable', sizes: '512x512', src: 'icon512_maskable.png', type: 'image/png' },
    { purpose: 'any', sizes: '512x512', src: 'icon512_rounded.png', type: 'image/png' },
  ],
  screenshots: [
    {
      src: '/screenshots/desktop.png',
      type: 'image/png',
      sizes: '2880x1558',
      form_factor: 'wide',
    },
    {
      src: '/screenshots/mobile.png',
      type: 'image/png',
      sizes: '762x1334 ',
      form_factor: 'narrow',
    },
  ],
  orientation: 'portrait',
  display: 'standalone',
  lang: 'ru-RU',
  name: 'toreadist',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // какие файлы кэшируем
      },
      manifest,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
