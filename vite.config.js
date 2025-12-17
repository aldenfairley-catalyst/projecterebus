import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/projecterebus/',  // IMPORTANT: Match your repo name
  build: {
    outDir: 'dist'
  }
})
