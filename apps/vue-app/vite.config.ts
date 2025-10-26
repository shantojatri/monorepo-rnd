import { defineConfig } from "vite" 
import path from "path"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(async () => {
  const vue = (await import('@vitejs/plugin-vue')).default
  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: { 
        '@workspace/ui': path.resolve(__dirname, '../../libs/ui/src'),
        '@': path.resolve(__dirname, '../../libs/ui/src'), 
      }
    }
  }
}) 