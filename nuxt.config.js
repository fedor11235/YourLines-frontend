import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  styleResources: {
    scss: [
      '@/assets/css/buttons.scss',
      '@/assets/css/variables.scss',
      '@/assets/css/public.scss'
    ],
    hoistUseStatements: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: './assets/css/public.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'yourLines.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'yourLines.crt'))
    }
  }
}
