// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { exec } from 'child_process'

export default defineConfig({
  plugins: [
    react(),
    mdx()
  ]
})

