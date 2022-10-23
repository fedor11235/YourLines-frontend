<template lang="pug">
.home
  user-toolbar
  user-home
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
.home {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  modal-help {
    position: fixed;
    top: 50%;
    right: 0;
  }
}
</style>