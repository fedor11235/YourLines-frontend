export default {
  methods: {
    handlerOpenLink(link) {
      this.$router.push(`user/${link}`)
    }
  }
}