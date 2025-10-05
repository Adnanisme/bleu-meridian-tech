import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' 
    ? '/bleu-meridian-tech/'  // for GitHub Pages production
    : '/',                    // for local development and custom domains
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
}))
