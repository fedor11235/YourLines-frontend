<template lang="pug">
.user-toolbar
  ul
    li
      .toolbar-avatar
        img.toolbar-avatar-img(v-if="userAvatar" :src="userAvatar")
    li(@click="$router.push('/home')") 
      popover(text="this home")
        toolbar-item(icon="home" :label="$t('TOOLBAR.HOME')")
    li(@click="$router.push('/notifications')")
      toolbar-item(icon="notifications" :label="$t('TOOLBAR.NOTIFICATION')")
    li(@click="$router.push('/messages')")
      toolbar-item(icon="messages" :label="$t('TOOLBAR.MESSAGES')")
    li(@click="$router.push('/bookmarks')")
      toolbar-item(icon="bookmarks" :label="$t('TOOLBAR.BOOKMARKS')")
    //- li(@click="$router.push('/lists')")
    //-   toolbar-item(icon="lists" :label="$t('TOOLBAR.LISTS')")
    li(@click="$router.push('/subscribers')")
      toolbar-item(icon="subscribers" label="Подписчики")
    li(@click="$router.push('/subscriptions')")
      toolbar-item(icon="subscriptions" :label="$t('TOOLBAR.SUBSCRIPTION')")
    li(@click="$router.push('/profile')")
      toolbar-item(icon="my-profile" :label="$t('TOOLBAR.PROFILE')")
    li(@click="expandOptions=!expandOptions")
      toolbar-item(icon="more" :label="$t('TOOLBAR.MORE')")
    ul(v-if="expandOptions")
      li(@click="$router.push('/settings')")
        toolbar-item(icon="settings" :label="$t('TOOLBAR.SETTINGS')")
      li(@click="$router.push('/payments')")
        toolbar-item(icon="bank-card" :label="$t('TOOLBAR.PAYMENTS')")
      li(@click="$router.push('/creator')")
        toolbar-item(icon="creator" :label="$t('TOOLBAR.BECOME_CREATOR')")
      li(@click="$router.push('/settings/language')")
        toolbar-item(icon="language" :label="$t('TOOLBAR.LANGUAGE')")
    li 
      button.toolbar-post(@click="$router.push('/create')") 
        .toolbar-textpost {{$t('TOOLBAR.POST')}}
    li 
      button.toolbar-post(@click="handlerExit") 
        .toolbar-textpost Выход
    li 
      button.toolbar-post(@click="handlerRefresh") 
        .toolbar-textpost Тест обновления токена

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      expandOptions: false
    }
  },
  computed: {
    ...mapGetters(['userAvatar'])
  },
  methods: {
    handlerExit() {
      this.$authService.userLogout()
      this.$router.push('login')
    },
    handlerRefresh() {
      this.$authService.userRefreshToken()
    }
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
      position: relative;
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
      .toolbar-avatar-img {
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>