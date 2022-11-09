export default ctx => ({
  async commentAdd(payload) {
    try {
      await ctx.$commentApi.commentAdd(payload)
    } catch (e) {
      console.error('user info unavailable', e)
    }
  }
})
