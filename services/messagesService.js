export default ctx => ({
  async getMessages() {
    try {
      return await ctx.$messagesApi.getMessages()
    } catch(e) {
      console.error('posts info unavailable', e)
    }
  }
})