// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/beatone-nuxt/': '/',
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/imgs/icon/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: "180x180", href: '/imgs/icon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/imgs/icon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/imgs/icon/favicon-16x16.png' },
        { rel: 'manifest', href: '/imgs/icon/site.webmanifest' },
      ]
    },
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
    //https://icones.js.org/
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
        name: 'English',
        icon: 'twemoji:flag-for-flag-united-states'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json',
        name: 'Italiano',
        icon: 'openmoji:flag-italy'
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
      'Roboto Slab': true,
      'Sassy Frass': true,
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
