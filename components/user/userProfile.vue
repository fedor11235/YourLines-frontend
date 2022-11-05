<template lang="pug">
.user-profile
    .profile-header
        .profile-feed(:style="setHeaderImage")
            .profile-avatar(:style="setAvatarImage")
        .profile-info
            .profile-nickname {{nickname}}
            .profile-link {{link}}
            .profile-item {{description}}
            .profile-more(v-if="crowded") {{$t('PROFILE.MORE')}}
    .profile-posts
        .profile-tabs
            .profile-tab(:class="{'profile-active': activeTab==='posts'}" @click="activeTab='posts'") {{$t('PROFILE.POSTS')}}
            .profile-tab(:class="{'profile-active': activeTab==='media'}" @click="activeTab='media'") {{$t('PROFILE.MEDIA')}}
        .profile-body
            post-profile(v-for="(post, index) in posts" :key="index" :item="post")
</template>
<script>
import { mapState } from 'vuex'
import bufferToBase64 from '@/mixins/bufferToBase64'
export default {
  mixins: [bufferToBase64],
  data() {
    return {
        crowded: false,
        activeTab: 'posts',
        modeEdit: false,
        posts: [],
        changedPosts: []
    }
  },
  async mounted() {
    const respons = await this.$postsService.postsGetUserAll()
    this.posts = respons.posts.map(post => {
        post.modeEdit = false
        return post
    })
  },
  computed: {
    ...mapState({
        description: state => state.user.description,
        nickname: state => state.user.nickname,
        link: state => state.user.link,
        avatar: state => state.user.avatar,
        headerImage: state => state.user.headerImage
    }),
    setHeaderImage() {
      if (this.headerImage) {
        return {
          backgroundImage: `url(${this.bufferToBase64(this.headerImage)})`, 
          backgroundSize: 'cover'
        }
      }
    },
    setAvatarImage() {
      if (this.avatar) {
        return {
          backgroundImage: `url(${this.bufferToBase64(this.avatar)})`, 
          backgroundSize: 'cover'
        }
      }
    }
  },
  methods: {
    convertBuffToBlob(imageBuff) {
        return Buffer.from(imageBuff, "base64")
    },
    handlerUploadImage(id) {
        const fileInput = document.getElementById(`fileInput-${id}`)
        const reader = new FileReader()
        reader.readAsDataURL(fileInput.files[0])
        reader.onload = () => {
            const post = this.posts.find(post => post._id === id)
            post.image = reader.result
        };
    },
    handlerOpenInput(id) {
        const fileInput = document.getElementById(`fileInput-${id}`)
        fileInput.click()
    },
    handlerDeleteImage(id) {
        const post = this.posts.find(post => post._id === id)
        post.image = null
    }
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
    }

  }
  .profile-posts {
    margin-top: 8px;
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