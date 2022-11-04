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
  .post-header {{header}}
  img.post-img(v-if="image" :src="bufferToBase64(image)")
  .post-action
    .post-like
      .post-like-count
    .post-comments
      .post-comments-count
</template>
<script>
import bufferToBase64 from '@/mixins/bufferToBase64'
import handlerOpenLink from '@/mixins/handlerOpenLink'
export default {
  mixins: [bufferToBase64, handlerOpenLink],
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
  }
  .post-header {
    padding: 16px;
  }
  .post-img {
    width: 100%;
  }
  .post-action{
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    .post-like {
      cursor: pointer;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 70% 70%;
      background-image: url(@/assets/img/like.png);
      transition: all 200ms ease;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .post-comments {
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
    }
  }
}
</style>