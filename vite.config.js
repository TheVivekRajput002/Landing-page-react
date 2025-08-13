import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No @tailwindcss/vite anywhere
export default defineConfig({
  plugins: [react()],
})
