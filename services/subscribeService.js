export default ctx => ({
  async getSubscriptions() {
    try {
      return await ctx.$subscribeApi.getSubscriptions()
    } catch (e) {
      console.error('posts info unavailable', e)
    }
  },
  async getSubscribers() {
    try {
      return await ctx.$subscribeApi.getSubscribers()
    } catch (e) {
      console.error('posts info unavailable', e)
    }
  },
  async subscribe(idUser) {
    try {
      await ctx.$subscribeApi.subscribe(idUser)
    } catch (e) {
      console.error('posts info unavailable', e)
    }
  },
  async unsubscribe(idUser) {
    try {
      await ctx.$subscribeApi.unsubscribe(idUser)
    } catch (e) {
      console.error('posts info unavailable', e)
    }
  },
  async check(idUser) {
    try {
      return await ctx.$subscribeApi.check(idUser)
    } catch (e) {
      console.error('posts info unavailable', e)
    }
  }
})
