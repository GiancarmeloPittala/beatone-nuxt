// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/beatone-nuxt/' : '',
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Be At One Restaurant - Text Mex',
      
      meta: [
        { name:"X-UA-Compatible", content:"IE=edge" },
        { name:"keywords", content:"restaurant, motta, pub motta, beatone" },
        { name:"subject", content:"Be At One Restaurant - Text Mex" },
        { name:"copyright",content:"Be At One" },
        { name:"robots", content:"index,follow"  },
        { name:"topic", content:"" },
        { name:"author", content:"giancarmelo, giancarmelo@gmail.com" },
        { name:"designer", content:"giancarmelo, giancarmelo@gmail.com" },
        { name:"copyright", content:"BeAtOne" },
        { name:"url", content:"https://giancarmelopittala.com/beatone-nuxt/" },
        { name:"category", content:"food" },
        { name:"coverage", content:"Worldwide" },
        { name:"distribution", content:"Global" },

        { name:'description', content: 'Be At One Pub motta, tex mex' },
        { name:"og:title", content:"Be At One Restaurant - Text Mex" },
        { name:"og:type", content:"website" },
        { name:"og:url", content:"https://giancarmelopittala.com/beatone-nuxt/" },
        { name:"og:image", content:"https://giancarmelopittala.com/beatone-nuxt/imgs/full-size-logo.jpg" },
        { property: "og:image:type", content:"image/jpg" },
        { property: "og:image:width", content:"1024" },
        { property: "og:image:height", content:"1024" },
        { name:"og:site_name", content:"Be At One Restaurant - Text Mex" },
        { name:"og:description", content:"Be At One Pub motta, tex mex"},
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
    '@/assets/css/base.css',
    '@/assets/css/tailwind.css',
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
    '@nuxt/postcss8'
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
    '@nuxtjs/tailwindcss',
    //https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
  ],
  typescript: {
    shim: false
  },
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
  sitemap: {
    hostname: 'https://example.com',
  },
  schemaOrg: {
    meta: {
      host: 'https://example.com'
    }
  },
})
