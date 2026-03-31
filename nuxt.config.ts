import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | Room Homepage",
    },
  },

  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "League Spartan",
        provider: "google",
        weights: [500, 600, 700],
        styles: ["normal"],
        subsets: ["latin"],
        preload: true,
        display: "swap",
      },
    ],
  },
});
