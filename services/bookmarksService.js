export default ctx => ({
  async bookmarkAdd(idPost, idUser) {
    try {
      await ctx.$bookmarksApi.bookmarkAdd(idPost, idUser)
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
  async bookmarkGetAll() {
    try {
      return await ctx.$bookmarksApi.bookmarkGetAll()
    } catch (e) {
      console.error('user info unavailable', e)
    }
  }
})
