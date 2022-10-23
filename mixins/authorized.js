export default {
    async mounted() {
        const route = $nuxt.$route.name.slice(0, -5)
        const user = await this.$authService.userGet()
        if (user) {
            if(route === 'login') {
                this.$router.push('home')
            }
        } else {
            if(route !== 'login') {
                this.$router.push('login')
            }
        }
    }
}
