<template lang="pug">
.profile
  user-toolbar
  user-profile
  modal-help
</template>

<script>
import { mapState } from 'vuex'
import authorized from '@/mixins/authorized'
export default {
  mixins: [authorized],
  computed: {
    ...mapState({
      page: state => state.page
    })
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