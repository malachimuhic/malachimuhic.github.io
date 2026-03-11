import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',           // root site: works for malachimuhic.github.io and malachimuhic.com
  build: {
    outDir: 'docs',    // build goes into docs/
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})
