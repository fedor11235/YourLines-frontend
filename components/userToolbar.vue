<template lang="pug">
.user-toolbar
  ul
    li
      .user-icon
        .user-avatar
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
.user-toolbar {
  display: flex;
  background-color: red;
  justify-content: space-evenly;
  // height: 242px;
  // width: 100vw;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
    .user-icon {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 36px;
      height: 36px;
      margin-right: 16px;
      border-radius: 50%;
      background-color: rgb(242,242,242);
      // transition: all 200ms ease;
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.9);
      }
      .user-avatar {
        width: 18px;
        height: 18px;
        background-image: url(../assets/img/avatar.png);
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>