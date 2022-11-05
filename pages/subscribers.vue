<template lang="pug">
.subscriptions
  user-toolbar
  user-subscribers
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
.subscriptions {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
}
</style>