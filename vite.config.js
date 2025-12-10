import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig( ({command}) => {
  return {
    plugins: [react()],
    css: {
      postcss: './postcss.config.js',
    },
    base: command === 'build' ? '/portfolio/' : '/',
  }
})
