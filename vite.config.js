import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api", "import"],
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
  base: process.env.NODE_ENV === 'production' ? "/portfolio/" : "/",
})
