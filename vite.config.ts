import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@global": path.resolve(__dirname, "src/global/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@tools": path.resolve(__dirname, "src/tools/"),
    },
  },
})
