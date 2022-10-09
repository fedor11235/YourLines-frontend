import path from 'path'
import fs from 'fs'
const env = require('./env')

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
    '~plugins/components'
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
    '@nuxtjs/i18n'
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    },
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'ru'
    },
    // paths: {
    //   en: '/',
    //   ru: '/',
    // },
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
    // skipSettingLocaleOnNavigate: true,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru'
  },

  build: {
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'yourLines.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'yourLines.crt'))
  //   }
  // }
}
