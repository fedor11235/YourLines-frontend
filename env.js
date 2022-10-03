'use strict'

const port = process.env.PORT || 3140

const env = {
  default: {
    port,
    project: 'yorLines',
    cookieKey: 'yor-lines-key'
  },
  dev: {
    host: `localhost:${port}`,
    apiUrl: 'localhost:3000',
  },
  production: {
    host: `localhost:${port}`,
    apiUrl: 'localhost:3000',
  }
}

module.exports = env
