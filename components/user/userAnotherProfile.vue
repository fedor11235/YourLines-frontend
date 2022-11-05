<template lang="pug">
.user-profile
  .profile-header
    .profile-feed(:style="setHeaderImage")
      .profile-avatar(:style="setAvatarImage")
    .profile-info
      .profile-nickname {{user.nickname}}
      .profile-link {{user.link}}
      .profile-item {{user.description}}
      .profile-more(v-if="crowded") {{$t('PROFILE.MORE')}}
      .profile-subscribe(v-if="ifSubscribe" @click="handlerUnsubscribe") Отписаться
      .profile-subscribe(v-else @click="handlerSubscribe") Подписаться
      .profile-messages(@click="handlerMessages") Написать сообщение
  .profile-posts
    .profile-tabs
      .profile-tab(:class="{'profile-active': activeTab==='posts'}" @click="activeTab='posts'") {{$t('PROFILE.POSTS')}}
      .profile-tab(:class="{'profile-active': activeTab==='media'}" @click="activeTab='media'") {{$t('PROFILE.MEDIA')}}
    .profile-body
      post-home(
        v-for="(post, index) in user.posts" 
        :key="index" 
        :image="post.image"
        :avatar="user.avatar"
        :nickname="user.nickname" 
        :link="user.link" 
        :header="post.header"
        :date="post.createdAt"
        :idPost="post.id"
        :idUser="user.id"
      )
</template>
<script>
import bufferToBase64 from '@/mixins/bufferToBase64'
import { create } from 'domain'
export default {
  mixins: [bufferToBase64],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      crowded: false,
      activeTab: 'posts',
      modeEdit: false,
      changedPosts: [],
      ifSubscribe: false, 
    }
  },
  async created() {
    this.ifSubscribe = await this.$subscribeService.check(this.user.id)
  },
  computed: {
    setHeaderImage() {
      if (this.user.headerImage) {
        return {
          backgroundImage: `url(${this.bufferToBase64(this.user.headerImage)})`, 
          backgroundSize: 'cover'
        }
      }
    },
    setAvatarImage() {
      if (this.user.avatar) {
        return {
          backgroundImage: `url(${this.bufferToBase64(this.user.avatar)})`, 
          backgroundSize: 'cover'
        }
      }
    }
  },
  methods: {
    async handlerSubscribe() {
      await this.$subscribeService.subscribe(this.user.id)
      this.ifSubscribe = true
    },
    async handlerUnsubscribe() {
      await this.$subscribeService.unsubscribe(this.user.id)
      this.ifSubscribe = false
    },
    handlerMessages() {}
  }
}
</script>
<style lang="scss" scoped>
.user-profile {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .profile-header {
    display: flex;
    flex-direction: column;
    height: 460px;
    .profile-feed {
      position: relative;
      height: 50%;
      background-image: url(@/assets/img/test-header.jpeg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .profile-avatar {
        position: absolute;
        background-color: #fdfdfd;
        border-radius: 50%;
        bottom:-43px;
        left: 16px;
        width: 96px;
        height: 96px;
        background-image: url(@/assets/img/avatar-big.png);
        background-size: 90% 90%;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
      }
  }
    .profile-info {
      position: relative;
      background-color: #fdfdfd;
      height: 50%;
      padding: 16px;
      padding-top: 48px;
      .profile-nickname {
        font-size: 21px;
        line-height: 24px;
        font-weight: 500;
      }
      .profile-link {

      }
      .profile-description {

      }
      .profile-more {
        position: absolute;
        bottom: 16px;
        cursor: pointer;
        color: #8a96a3;
        &:hover {
          color: rgba(0, 0, 0, 0.9);
        }
      }
      .profile-subscribe {
        background-color: #a0b9f1;
        color: #fdfdfd;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
        margin: 8px 0;
        padding: 4px 0;
        width: 108px;
        &:hover {
          background-color: #7a92ef;
        }
        &:active {
          transform: scale(0.975);
        }
      }
      .profile-messages {
        background-color: #a0b9f1;
        color: #fdfdfd;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
        margin: 8px 0;
        padding: 4px 0;
        width: 208px;
        &:hover {
          background-color: #7a92ef;
        }
        &:active {
          transform: scale(0.975);
        }
      }
    }
  }
  .profile-posts {
    margin-top: 8px;
    // overflow-y: scroll;
    height: 100%;
    background-image: url(https://static.onlyfans.com/theme/onlyfans/spa/img/empty-feed.svg);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: top;
    .profile-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 56px;
      background-color: #fdfdfd;
      padding-bottom: 8px;
      .profile-tab {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 21px;
        line-height: 24px;
        color: #8a96a3;
        border-bottom: 2px solid #fdfdfd;
        cursor: pointer;
        &:hover {
          background-color: #ebebeb;
          border-bottom: 2px solid #ebebeb;
        }
        &.profile-active {
          color: #1A1A1A;
          border-bottom: 2px solid #1A1A1A;
          }
      }
    }
    .profile-body {
    }
  }
}
</style>