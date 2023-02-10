// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    }
  },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/base.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/i18n',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-icon',
    //https://unhead-schema-org.harlanzw.com/
    'nuxt-schema-org',
    //https://headlessui.com/
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json',
        name: 'Italiano'
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
  robots: {
    sitemap: 'https:/localhost/sitemap.xml',
  },
  googleFonts: {
    families: {
      Roboto: true,
      'sans-serif': true
    }
  },
  sitemap: {
    hostname: 'https://example.com',
  },
  schemaOrg: {
    meta: {
      host: 'https://example.com'
    }
  }
})
