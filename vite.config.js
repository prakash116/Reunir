import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: '/Reunir/', // keep your project base

  server: {
    // 🔥 Fix refresh page 404 for BrowserRouter
    historyApiFallback: true,
  },

  build: {
    // For deployments where SPA routing is needed
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
