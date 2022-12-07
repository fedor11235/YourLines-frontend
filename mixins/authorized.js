export default {
  async mounted() {
    const route = $nuxt.$route.name.slice(0, -5)
    const user = await this.$userService.userGet()

    if (user) {
      if(route === 'login') {
        this.$router.replace('home')
      }

      this.$busDate.socket = this.$nuxtSocket({
        channel: '/notifications',
        query: {
          roomId: user.id
        }
      })

    } else {
      if(route !== 'login') {
        this.$router.replace('login')
      }
    }
  }
}
