import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(),react()],
  server:{
    port: 3100
  },
  build: {
    outDir: 'build'
  },
  css:{
    devSourcemap: true
  }
})
