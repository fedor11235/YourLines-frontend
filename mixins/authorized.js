export default {
  async mounted() {
    const route = $nuxt.$route.name.slice(0, -5)
    const user = await this.$userService.userGet()
    if (user) {
      if(route === 'login') {
        this.$router.replace('home')
      }
    } else {
      if(route !== 'login') {
        this.$router.replace('login')
      }
    }
  }
}
