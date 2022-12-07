import path from 'path'
import fs from 'fs'
const env = require('./env')
// const auth = require('./auth')

export default {
  head: {
    title: 'YourLines',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: env,

  styleResources: {
    scss: [
      '@/assets/css/buttons.scss',
      '@/assets/css/variables.scss',
      '@/assets/css/public.scss'
    ],
    hoistUseStatements: true
  },

  css: [
    { src: './assets/css/public.scss', lang: 'scss' }
  ],

  plugins: [
    '~plugins/api',
    '~plugins/services',
    '~plugins/libraries',
    '~plugins/router',
    '~plugins/components',
    '~plugins/settings',
    '~plugins/bus',
    // { src: '~plugins/notifications', ssr: false },
  ],

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  modules: [
    [
      '@nuxtjs/axios',
      {
        baseURL: 'http://127.0.0.1:3000',
        proxy: true
      }
    ],
    '@nuxtjs/i18n',
    'nuxt-socket-io',
    // '@nuxtjs/auth-next'
  ],

  io: {
    // module options
    sockets: [{
      name: 'chat',
      url: 'http://localhost:88',
      default: true,
    }]
  },

  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  },

  // router: {
  //   middleware: ['auth']
  // },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
        iso: 'en-US',
        name:  'English'
      },
      {
        code: 'ru',
        file: 'ru-RU.json',
        iso: 'ru-RU',
        name:  'Русский'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru'
  },

  // auth: auth,
  
  build: {
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'yourLines.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'yourLines.crt'))
  //   }
  // }
}
