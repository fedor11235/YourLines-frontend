<template lang="pug">
.user-bookmarks.scroll
  header-feed(:title="$t('BOOKMARKS.TITLE')")
  .bookmarks-body
      post-home(
        v-for="(bookmark, index) in bookmarks" 
          :key="index" 
          :image="bookmark.post.image"
          :avatar="bookmark.user.avatar"
          :nickname="bookmark.user.nickname"
          :link="bookmark.user.link"
          :header="bookmark.post.header"
          :date="bookmark.post.createdAt"
          :idPost="bookmark.post.id"
          :idUser="bookmark.user.id"
          :likes="bookmark.post.likes"
          :comments="bookmark.post.comment"
        )
</template>
<script>
export default {
  data() {
    return {
      bookmarks: []
    }
  },
  async created() {
    this.bookmarks = await this.$bookmarksService.bookmarkGetAll()
  }
}
</script>
<style lang="scss" scoped>
.user-bookmarks {
  overflow-y: scroll;
}
</style>