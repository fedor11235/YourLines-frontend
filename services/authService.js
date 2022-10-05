export default ctx => ({
  async userLogin(payload) {
    let response
    try {
      response = await ctx.$authApi.userLogin(payload)
      window.localStorage.setItem('login', response.user)
      return response.login
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userRegistry(payload) {
    let response
    try {
      response = await ctx.$authApi.userRegistry(payload)
      window.localStorage.setItem('login', response.user)
      return response.registry
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userLogout() {
    localStorage.removeItem(process.env.dev.cookieKey)
  },
})