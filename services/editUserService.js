export default ctx => ({
  async editUser(payload) {
    let response
    try {
      response = await ctx.$editUserApi.editUser(payload, ctx.$store.state.user.id)
      return response
    } catch (e) {
      console.error('user info unavailable', e)
    }
  },
})
