import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // By default, warnings and errors are shown in overlay
      emitWarning: true, // <-- show warnings instead of errors
      emitError: false, // <-- don’t treat ESLint errors as Vite build errors
      failOnError: false, // <-- don’t fail the dev server on errors
    }),
  ],
});
