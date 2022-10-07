<template lang="pug">
.user-toolbar
  ul
    li
      .toolbar-avatar
    li(@click="$router.push('/home')") 
      toolbar-item(icon="home" label="Home")
    li(@click="$router.push('/notifications')")
      toolbar-item(icon="notifications" label="Notifications")
    li(@click="$router.push('/messages')")
      toolbar-item(icon="messages" label="Messages")
    //- li(@click="$router.push('/bookmarks')")
    //-   toolbar-item(icon="bookmarks" label="Bookmarks")
    //- li(@click="$router.push('/lists')")
    //-   toolbar-item(icon="lists" label="Lists")
    li(@click="$router.push('/subscriptions')")
      toolbar-item(icon="subscriptions" label="Subscriptions")
    li(@click="$router.push('/profile')")
      toolbar-item(icon="my-profile" label="My profile")
    li(@click="expandOptions=!expandOptions")
      toolbar-item(icon="more" label="More")
    ul(v-if="expandOptions")
      li(@click="$router.push('/settings')")
        toolbar-item(icon="settings" label="Settings")
      li(@click="$router.push('/payments')")
        toolbar-item(icon="bank-card" label="Add a card")
      li(@click="$router.push('/creator')")
        toolbar-item(icon="creator" label="Become a Creator")
    li 
      button.toolbar-post(@click="$router.push('/create')" :class="{'toolbar-active': page === 'new-post'}") 
        .toolbar-textpost Post

</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      expandOptions: false
    }
  },
  computed: {
    ...mapState({
      page: state => state.page
    })
  },
  methods: {
    ...mapMutations({
      pageChange: 'PAGE_CHANGE'
    })
  }
}
</script>
<style lang="scss" scoped>
.user-toolbar {
  display: flex;
  min-width: 183px;
  justify-content: space-evenly;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    margin-bottom: 21px;
    cursor: pointer;
    -ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
    .toolbar-avatar {
      width: 42px;
      height: 42px;
      margin-left: -26px;
      border-radius: 50%;
      background-color: rgb(242,242,242);
      background-image: url(@/assets/img/avatar-big.png);
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
      background-image: url(@/assets/img/home.png);
      background-size: cover;
    }

    .toolbar-notifications {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/notifications.png);
      background-size: cover;
    }

    .toolbar-messages {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/messages.png);
      background-size: cover;
    }

    .toolbar-bookmarks {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/bookmarks.png);
      background-size: cover;
    }

    .toolbar-lists {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/lists.png);
      background-size: cover;
    }

    .toolbar-subscriptions {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/subscriptions.png);
      background-size: cover;
    }

    .toolbar-profile {
      width: 21px;
      height: 21px;
      margin-left: -16px;
      margin-right: 12px;
      background-image: url(@/assets/img/my-profile.png);
      background-size: cover;
    }

    .toolbar-post {
      background-color: #a0b9f1;
      border-radius: 1000px;
      margin-left: -21px;
      width: 180px;
      height: 48px;
      cursor: pointer;
      font-size: 18px;
      color: #fdfdfd;
      transition: all 200ms ease;
      &:hover {
        background-color: #7a92ef;
      }
      &:active {
        transform: scale(0.975);
      }
      &.toolbar-active {
        background-color: #f2f2f2;
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
}
</style>