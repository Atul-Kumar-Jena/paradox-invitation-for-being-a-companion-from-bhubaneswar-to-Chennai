import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/paradox-invitation-for-being-a-companion-from-bhubaneswar-to-Chennai",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
