import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Per il deploy su GitHub Pages (https://<utente>.github.io/<repo>/)
// la "base" deve corrispondere al nome del repository.
// Puoi impostarla in 3 modi:
// 1) Automaticamente: il workflow incluso (.github/workflows/deploy.yml)
//    la calcola da solo in CI.
// 2) Manualmente in locale: crea un file .env con
//    VITE_BASE_PATH=/nome-del-repo/
// 3) Lasciandola a "/" se pubblichi su un dominio personalizzato
//    o su <utente>.github.io (repo "root").

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
