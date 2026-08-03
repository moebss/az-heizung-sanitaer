import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/az-heizung-sanitaer/',
  server: {
    port: 3004,
    host: true
  },
  preview: {
    port: 3004,
    host: true
  }
});
