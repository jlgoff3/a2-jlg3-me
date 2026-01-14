// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  tailwindcss: {
    config: {
      safelist: [
        {
          pattern: /bg-+/,
        },
        {
          pattern: /border-+/,
        },
        {
          pattern: /divide-+/,
        },
      ],
    },
  },
});
