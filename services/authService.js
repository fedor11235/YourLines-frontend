export default ctx => ({
  async userLogin(payload) {
    try {
      const response = await ctx.$authApi.userLogin(payload)
      window.localStorage.setItem('token', response.token)
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userRegistry(payload) {
    try {
      const response = await ctx.$authApi.userRegistry(payload)
      window.localStorage.setItem('login', response.user)
      return response
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userGet() {
    try {
      const token = window.localStorage.getItem('token')
      if(token) {
        const user = await ctx.$authApi.userGet(token)
        ctx.store.commit('USER_SAVE_DATA', user)
        return user
      }
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userLogout() {
    localStorage.removeItem('token')
  },
})
