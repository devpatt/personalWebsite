import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://devpatt.github.io/personalWebsite/ by default.
// Set VITE_BASE=/ when using a custom domain.
export default defineConfig({
  base: process.env.VITE_BASE || '/personalWebsite/',
  plugins: [react()],
})
