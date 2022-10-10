<template lang="pug">
.lists
  user-toolbar
  user-lists
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
.lists {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
}
</style>