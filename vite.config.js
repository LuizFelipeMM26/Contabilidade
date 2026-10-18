import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/', // 👈 Substitua pelo nome exato do seu repositório
})
