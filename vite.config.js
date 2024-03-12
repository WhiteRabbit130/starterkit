import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    preview: {
        host: '0.0.0.0',
        port: 3000,
    },
    resolve: {
        alias: {
            "@": "/src/",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@styles": "/src/styles",
            "@test": "/src/test",
        }
    }
})