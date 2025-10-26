import path from 'path'
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  alias: {
    '@workspace/ui': path.resolve(__dirname, '../../libs/ui/src'),
    '@': path.resolve(__dirname, '../../libs/ui')
  },
  vite: {
    resolve: {
      alias: {
        '@workspace/ui': path.resolve(__dirname, '../../libs/ui/src'),
        '@': path.resolve(__dirname, '../../libs/ui')
      }
    },
    plugins: [tailwindcss()],
  }
})
