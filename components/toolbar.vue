<template lang="pug">
  .footer-page
    ul
      li AVATARS
      li Home
      li Notifications
      li Messages
      li Bookmarks
      li Bookmarks
      li Lists
      li Subscriptions
      li My profile
      li More
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footer-page {
  display: flex;
  justify-content: space-evenly;
  height: 242px;
  width: 100vw;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    cursor: pointer;
  }
}
</style>