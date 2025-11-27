import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss({
      // Explicitly enable dark mode
    })
  ],
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'gsap-vendor': ['gsap'],
          'icons-vendor': ['react-icons']
        }
      }
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap', 'react-icons']
  }
})
