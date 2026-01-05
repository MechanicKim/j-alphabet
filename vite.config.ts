import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/app/jp-letters/",
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        scope: '/app/jp-letters/',
        start_url: '/app/jp-letters/',
        name: "일본어 가나 쓰기 마스터",
        short_name: "가나 마스터",
        description: "히라가나와 가타카나를 직접 쓰며 배우는 앱",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              /^https:\/\/raw\.githubusercontent\.com\/KanjiVG\/kanjivg\/.*\.svg$/,
            handler: "CacheFirst", // 한 번 받으면 캐시에서 먼저 찾음
            options: {
              cacheName: "kanjivg-svg-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30일간 유지
              },
            },
          },
        ],
      },
    }),
  ],
});
