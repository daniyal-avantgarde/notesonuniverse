// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { exec } from 'child_process'

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    {
      name: 'run-nodeDataUpdater',
      apply: 'serve',
      configureServer(server) {
        const runScript = () => {
          exec('node ./src/pages/nodeDataUpdater.js', (err, stdout, stderr) => {
            if (err) {
              console.error('Error running nodeDataUpdater.js:', err)
              return
            }
            console.log('nodeDataUpdater.js output:\n', stdout || stderr)
          })
        }

        // Run once on startup
        runScript()

        // Watch .mdx files
        server.watcher.on('change', (file) => {
          if (file.endsWith('.mdx')) {
            console.log(`File changed: ${file}`)
            runScript()
          }
        })
      }
    }
  ]
})

