<template lang="pug">
.bookmarks
  user-toolbar
  user-bookmarks
  user-news
  modal-help
</template>

<script>
import { mapState } from 'vuex'
export default {
  // layout: 'standartPage'
  computed: {
    ...mapState({
      page: state => state.page
    })
  }
}
</script>

<style lang="scss" scoped>
.bookmarks {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
}
</style>