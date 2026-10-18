import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Contabilidade/', // 👈 Substitua pelo nome exato do seu repositório
})
