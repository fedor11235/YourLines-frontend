<template lang="pug">
.user-subscriptions
  header-feed(:title="$t('SUBSCRIPTIONS.TITLE')")
  .subscriptions-input
    .subscriptions-cansel(v-if="serachMode" @click="handlerCloseSearch")
    .subscriptions-text(v-if="!serachMode" @click="serachMode=true") {{$t('SUBSCRIPTIONS.SEARCH')}}
    input.subscriptions-search(v-if="serachMode" v-model="serachSubscriptions" :placeholder="$t('SUBSCRIPTIONS.TITLE')")
    .subscriptions-icon(v-if="!serachMode" @click="serachMode=true")
  .subscriptions-body
    suggestions(v-for="user in users" :user="user" :key="user.id")
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      serachMode: false,
      serachSubscriptions: '',
      users: []
    }
  },
  watch: {
    async serachSubscriptions(val) {
      if (val) {
        this.users = await this.$userService.searchUserByNickname(val)
      } else {
        this.users = await this.$subscribeService.getSubscriptions()
      }
    }
  },
  computed: {
    ...mapState({
      userId: state => state.user.id
    })
  },
  async mounted() {
    this.users = await this.$subscribeService.getSubscribers()
  },
  methods: {
    handlerCloseSearch() {
      this.serachMode=false
      this.serachSubscriptions = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.user-subscriptions {
  max-width: 640px;
  .subscriptions-input {
    position: relative;
    padding-bottom: 16px;
    background: #fdfdfd;
    .subscriptions-icon {
      position: absolute;
      top: 10px;
      right: 16px;
      width: 20px;
      height: 20px;
      background-image: url(@/assets/img/search.png);
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }
    .subscriptions-text {
      font-size: 16px;
      padding: 10px 0;
      margin-left: 52px;
      height: 40px;
      color: #8a96a3;
      cursor: pointer;
    }
    .subscriptions-search {
      margin-left: 36px;
      margin-right: 36px;
      width: calc(100% - 36px);
      font-size: 16px;
      font-weight: 500;
      padding: 10px 16px;
      border: 0;
      border-radius: 5px;
      height: 40px;
    }
    .subscriptions-cansel {
      position: absolute;
      left: 16px;
      top: 10px;
      width: 20px;
      height: 20px;
      margin-right: 12px;
      background-size: cover;
      background-image: url(@/assets/img/delete.png);
      cursor: pointer;
    }
  }
  .subscriptions-body {
    padding: 8px;
  }
}
</style>