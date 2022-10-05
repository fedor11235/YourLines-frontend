<template lang="pug">
.main
  user-toolbar
  user-home(v-if="page==='home'")
  user-notifications(v-if="page==='notifications'")
  user-messages(v-if="page==='messages'")
  user-bookmarks(v-if="page==='bookmarks'")
  user-lists(v-if="page==='lists'")
  user-subscriptions(v-if="page==='subscriptions'")
  user-profile(v-if="page==='my-profile'")
  user-news
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
.main {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
}

</style>