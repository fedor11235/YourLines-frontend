<template lang="pug">
.post-item
  .post-redaction
    .post-preview(
      v-if="avatar" 
      :style="{backgroundImage: `url(${bufferToBase64(avatar)})`, backgroundSize: 'cover'}"
      @click="handlerOpenLink(link)"
      )
    .post-preview(v-else @click="handlerOpenLink(link)")
    .post-specification
      .post-preview-nickname(@click="handlerOpenLink(link)") {{nickname}}
      .post-preview-link(@click="handlerOpenLink(link)") @{{link}}
    .post-date {{handlerConvertDate(date)}}
  .post-header {{header}}
  img.post-img(v-if="image" :src="bufferToBase64(image)")
  .post-action
    .post-bookmarks(@click="handlerAddBookmarks")
    .post-tips(@click="handlerAddLike")
    .post-like(@click="handlerAddLike")
      .post-like-count {{likesChange}}
    .post-comments(@click="handlerCommentOpen")
      .post-comments-count {{commentChange}}
  .post-comments-list
    .post-comments-item(v-for="(comment, index) in comments" :key="index")
      .post-comments-avatar(:style="{backgroundImage: `url(${bufferToBase64(comment.user.avatar)})`, backgroundSize: 'cover'}")
      .post-comments-comm {{comment.text}}
  .post-comments-text(v-show="commentShow")
    .post-comments-cancel(@click="handlerCommentClose")
    input.post-comments-input(v-model="comment" placeholder="Оставьте комментарий")
    .post-comments-submit(@click="handlerAddComments")
</template>
<script>
import bufferToBase64 from '@/mixins/bufferToBase64'
import handlerOpenLink from '@/mixins/handlerOpenLink'
import handlerConvertDate from '@/mixins/handlerConvertDate'
export default {
  mixins: [
    bufferToBase64,
    handlerOpenLink,
    handlerConvertDate
  ],
  props: {
    image: {
      type: Object | null,
      required: true
    },
    avatar: {
      type: Object | null,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    header: {
      type: String | null,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    idPost: {
      type: String,
      required: true
    },
    idUser: {
      type: String,
      required: true
    },
    likes: {
      type: Number | null,
      required: true
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      comment: '',
      likesChange: 0,
      commentChange: 0,
      commentShow: false
    }
  },
  created() {
    console.log(this.comments)
    this.likesChange = this.likes ? this.likes: 0
    this.commentChange = this.comments.length !== 0 ? this.comments.length: 0
  },
  methods: {
    handlerCommentOpen() {
      this.commentShow = true
    },
    handlerCommentClose() {
      this.commentShow = false
      this.comment=''
    },
    handlerAddBookmarks() {
      this.$bookmarksService.bookmarkAdd(this.idPost, this.idUser)
    },
    handlerAddLike() {
      this.likesChange = this.likes + 1
      this.$postsApi.postLike(this.idPost)
    },
    handlerAddComments() {
      this.$commentService.commentAdd({text: this.comment, userId: this.idUser, postId: this.idPost})
      this.commentChange += 1
      this.comment=''
    }
  }
}
</script>
<style lang="scss" scoped>
.post-item {
  background-color: #fdfdfd;
  margin: 2px 0;
  .post-redaction {
    position: relative;
    height: 60px;
    .post-preview {
      position: absolute;
      top: 6px;
      left: 16px;
      height: 48px;
      width: 48px;
      border-radius: 50%;
      background-image: url(@/assets/img/avatar.png);
      background-size: 50% 50%;
      background-color: #f2f2f2;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 2;
      cursor: pointer;
    }
    .post-specification {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      left: 82px;
      .post-preview-nickname {
        font-size: 16px;
        cursor: pointer;
      }
      .post-preview-link {
        font-size: 14px;
        color: #8a96a3;
        cursor: pointer;
        &:hover {
          color: $color3;
        }
      }
    }
    .post-date {
      position: absolute;
      top: 6px;
      right: 16px;
      font-size: 14px;
      color: #8a96a3;
    }
  }
  .post-header {
    padding: 16px;
  }
  .post-img {
    width: 100%;
  }
  .post-action{
    position: relative;
    height: 48px;
    .post-bookmarks {
      position: absolute;
      top: 8px;
      left: 8px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60% 60%;
      background-image: url(@/assets/img/bookmarks.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }

    .post-tips {
      position: absolute;
      top: 8px;
      right: 88px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 82% 82%;
      background-image: url(@/assets/img/tips.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .post-like {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      position: absolute;
      top: 8px;
      right: 48px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-size: 70% 70%;
      background-position: center;
      background-image: url(@/assets/img/like.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
      .post-like-count {
        display: flex;
        height: 18px;
        width: 18px;
        background-color: $color3;
        color: white;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
    .post-comments {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      position: absolute;
      top: 8px;
      right: 8px;
      margin-left: 8px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 70% 70%;
      background-image: url(@/assets/img/comments.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
      .post-comments-count {
        display: flex;
        height: 18px;
        width: 18px;
        background-color: $color3;
        color: white;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
  }

  .post-comments-list{
    .post-comments-item{
      position: relative;
      min-height: 42px;
      .post-comments-avatar{
        position: absolute;
        top: 6px;
        left: 16px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background-image: url(@/assets/img/avatar.png);
        background-size: 50% 50%;
        background-color: #f2f2f2;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
        cursor: pointer;
      }
      .post-comments-comm {
        padding: 12px 70px;
      }
    }
  }
  .post-comments-text {
    position: relative;
    padding: 12px 70px 12px 56px;
    .post-comments-cancel {
      position: absolute;
      top: 8px;
      left: 8px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60% 60%;
      background-image: url(@/assets/img/delete.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .post-comments-submit {
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60% 60%;
      background-image: url(@/assets/img/send.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .post-comments-input {
      width: 100%;
      height: 30px;
      border-radius: 8px;
      border: 0;
      outline: 1px solid #A6ABDA;
      padding: 0 12px;
      &::placeholder {
        color: #D4D7F3;
      }
    }
  }
}
</style>