import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5175
  },
  // Set base path for GitHub Pages (replace with your repo name if different)
  base: '/survey-website/'
});
