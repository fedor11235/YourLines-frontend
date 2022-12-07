export default ctx => ({
  async viewed() {
    try {
      await ctx.$notificationsApi.viewed()
    } catch(e) {
      console.error('posts info unavailable', e)
    }
  }
})