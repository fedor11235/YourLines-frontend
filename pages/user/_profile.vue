<template lang="pug">
.profile
  user-toolbar
  user-another-profile(:user="user")
  modal-help
</template>

<script>
import { mapState } from 'vuex'
import authorized from '@/mixins/authorized'
export default {
  mixins: [authorized],
  data() {
    return {
      user: {}
    }
  },
  computed: {
    ...mapState({
        page: state => state.page
    })
  },
  async created() {
    this.user = await this.$userService.getUsersByLink(this.$route.params.profile)
  }
}
</script>

<style lang="scss" scoped>
.profile {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>