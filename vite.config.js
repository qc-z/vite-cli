// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// TODO: 开启gzip
// import viteCompression from 'vite-plugin-compression'

const path = require('path')

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, '/src') } },
  plugins: [vue(), Components({ resolvers: [ElementPlusResolver()] })],

  build: {
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    brotliSize: false
  }
})
