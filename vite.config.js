import { defineConfig } from 'vite';

export default defineConfig({
  // Sostituisci con il nome della tua repository GitHub per il deploy su Pages
  base: process.env.NODE_ENV === 'production' ? '/lit-schema-form/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});