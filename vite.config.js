import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [vue()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue': ['vue'],
          'iconify': ['@iconify/vue'],
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
})
