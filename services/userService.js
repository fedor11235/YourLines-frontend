export default ctx => ({
  async userGet() {
    try {
      const user = await ctx.$userApi.userGet()
      ctx.store.commit('USER_SAVE_DATA', user)
      window.localStorage.setItem('userId', user.id)
      return user
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async editUser() {
    try {
      const userId = ctx.store.state.user.id
      const user = ctx.store.state.user
      return await ctx.$userApi.editUser(user, userId)
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async getAllUsers() {
    try {
      return await ctx.$userApi.getAllUsers()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async getUsersByLink(link) {
    try {
      return await ctx.$userApi.getUsersByLink(link)
    } catch (e) {
      console.error('user info unavailable', e)
    }
  }
})
