<template lang="pug">
.create
  user-toolbar
  user-new-post
  user-news
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
.create {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
}
</style>