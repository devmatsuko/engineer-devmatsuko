import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/engineer-devmatsuko/',
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})