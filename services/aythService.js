export default ctx => ({
  async userLogin(payload) {
    let response
    try {
      response = ctx.$authApi.loginUser(payload)
      window.localStorage.setItem('login', response.user)
      return response.login
    } catch (e) {
      console.log('user info unavailable', e)
    }
  },
  async userRegistry(payload) {
    let response
    try {
      response = ctx.$authApi.registryUser(payload)
      window.localStorage.setItem('login', response.user)
      return response.login
    } catch (e) {
      console.log('user info unavailable', e)
    }
  },
  async userLogout() {
    localStorage.removeItem(process.env.dev.cookieKey)
  },
})
