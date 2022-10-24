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
      if (response.token) {
        window.localStorage.setItem('token', response.token)
      }
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userGet() {
    try {
      const user = await ctx.$authApi.userGet()
      ctx.store.commit('USER_SAVE_DATA', user)
      return user
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userRefreshToken() {
    try {
      const token = await ctx.$authApi.userRefreshToken() 
      if (token) {
        window.localStorage.setItem('token', token)
      }
      await this.userGet()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userLogout() {
    try {
      await ctx.$authApi.userLogout() 
      localStorage.removeItem('token')
      //TODO привести стор в дефолтное состояние
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },

  //Authorization through social networks
  async userLoginGoogle() {
    try {
      return ctx.$authApi.userLoginGoogle()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userLoginTwitter() {
    try {
      return ctx.$authApi.userLoginTwitter()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async userLoginInstagram() {
    try {
      return ctx.$authApi.userLoginInstagram()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  }
})
