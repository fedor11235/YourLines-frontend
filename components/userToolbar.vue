<template lang="pug">
.user-toolbar
  ul
    li
      .toolbar-avatar
    li(@click="pageChange('home')") 
      .toolbar-home 
      | Home
    li(@click="pageChange('notifications')")
      .toolbar-notifications 
      | Notifications
    li(@click="pageChange('messages')")
      .toolbar-messages 
      | Messages
    li(@click="pageChange('bookmarks')")
      .toolbar-bookmarks 
      | Bookmarks
    li(@click="pageChange('lists')")
      .toolbar-lists 
      | Lists
    li(@click="pageChange('subscriptions')")
      .toolbar-subscriptions 
      | Subscriptions
    li(@click="pageChange('my-profile')")
      .toolbar-profile 
      | My profile
    li 
      button.toolbar-post(@click="handlerAddPost") 
        //- .toolbar-addpost
        .toolbar-textpost Post
    //- li(@click="pageChange('home')") More
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      pageChange: 'PAGE_CHANGE'
    }),
  }
  
}
</script>
<style lang="scss" scoped>
.user-toolbar {
  display: flex;
  justify-content: space-evenly;
  // height: 242px;
  // width: 100vw;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    display: flex;
    margin-bottom: 21px;
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
    .toolbar-avatar {
      width: 42px;
      height: 42px;
      margin-left: -26px;
      border-radius: 50%;
      background-color: rgb(242,242,242);
      background-image: url(../assets/img/avatar-big.png);
      background-size: 80% 80%;
      background-position: center;
      background-repeat: no-repeat;
      border: 1px solid rgb(242,242,242);
      // transition: all 200ms ease;
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.9);
      }
    }

    .toolbar-home {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/home.png);
      background-size: cover;
    }

    .toolbar-notifications {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/notifications.png);
      background-size: cover;
    }

    .toolbar-messages {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/messages.png);
      background-size: cover;
    }

    .toolbar-bookmarks {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/bookmarks.png);
      background-size: cover;
    }

    .toolbar-lists {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/lists.png);
      background-size: cover;
    }

    .toolbar-subscriptions {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/subscriptions.png);
      background-size: cover;
    }

    .toolbar-profile {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(../assets/img/my-profile.png);
      background-size: cover;
    }

    .toolbar-post {
      position: relative;
      // background-color: transparent;
      background-color: #a0b9f1;
      border-radius: 1000px;
      margin-left: -21px;
      width: 180px;
      height: 48px;
      cursor: pointer;
      font-size: 18px;
      color: #fdfdfd;
      transition: all 200ms ease;
      // border: 1px solid #8a96a3;
      &:hover {
        background-color: #7a92ef;
      }
      &:active {
        transform: scale(0.975);
      }
      .toolbar-addpost {
        position: absolute;
        left: -8px;
        top: 8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-left: 16px;
        background-image: url(../assets/img/plus.png);
        background-size: 50% 50%;
        background-position: center;
        transform: rotate(180deg);
        background-repeat: no-repeat;
      }
      .toolbar-textpost {
        
      }
    }
  }
}
</style>