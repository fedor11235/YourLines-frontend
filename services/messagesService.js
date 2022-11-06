export default ctx => ({
  async getMessages() {
    try {
      return await ctx.getMessages()
    } catch(e) {
      console.error('posts info unavailable', e)
    }
  }
})