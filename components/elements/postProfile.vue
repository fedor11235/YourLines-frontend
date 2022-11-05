<template lang="pug">
.post-item
  input.post-upload-file(type="file" @change="handlerUploadImage(item._id)" :id="`fileInput-${item._id}`" accept="image/*")
  .post-redaction
    .post-preview(
        v-if="avatar" 
        :style="{backgroundImage: `url(${bufferToBase64(avatar)})`, backgroundSize: 'cover'}"
        )
    .post-preview(v-else)
    .post-specification
      .post-preview-nickname {{nickname}}
      .post-preview-link {{link}}
    .post-edit(v-if="!item.modeEdit" @click="item.modeEdit=true")
    .post-save(v-if="item.modeEdit" @click="item.modeEdit=false")
    .post-delete
    .post-date {{handlerConvertDate(item.createdAt)}}
  .post-banner-header
    .post-banner(v-if="!item.modeEdit") {{item.header}}
    input.post-input-banner(v-if="item.modeEdit" v-model="item.header")
    .post-delete-description(v-if="item.modeEdit && item.header" @click="item.header=''")
    .post-upload(v-if="item.modeEdit && !item.image" @click="handlerOpenInput(item._id)")
  .post-picture(v-if="item.image")
    img.post-img( :src="convertBuffToBlob(item.image)")
    .post-delete-img(v-if="item.modeEdit" @click="handlerDeleteImage(item._id)")
  .post-action
    .post-like
    .post-comments
</template>
<script>
import handlerConvertDate from '@/mixins/handlerConvertDate'
import bufferToBase64 from '@/mixins/bufferToBase64'
import { mapState } from 'vuex'
export default {
  mixins: [handlerConvertDate, bufferToBase64],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
  ...mapState({
      description: state => state.user.description,
      nickname: state => state.user.nickname,
      link: state => state.user.link,
      avatar: state => state.user.avatar
    })
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
.post-item {
  background-color: #fdfdfd;
  margin-bottom: 4px;
  .post-upload-file {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }
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
    }

    .post-date {
      position: absolute;
      top: 12px;
      right: 100px;
      font-size: 14px;
      color: #8a96a3;
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
      }
      .post-preview-link {
        font-size: 14px;
        color: #8a96a3;
      }
    }
    .post-edit {
      position: absolute;
      top: 12px;
      right: 58px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/edit.png);
      background-size: 50% 50%;
      background-color: #a0b9f1;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      &:hover {
        background-color: #7a92ef;
      }
    }
    .post-save {
      position: absolute;
      top: 12px;
      right: 58px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/save.png);
      background-size: 50% 50%;
      background-color: #a0f1ab;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 200ms ease;
      cursor: pointer;
      &:hover {
        background-color: #7aef9d;
      }
      &:active {
        transform: scale(0.975);
      }
    }
    .post-delete {
      position: absolute;
      top: 12px;
      right: 16px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/delete.png);
      background-size: 50% 50%;
      background-color: #eb8c8c;
      background-repeat: no-repeat;
      background-position: center;
      transition: all 200ms ease;
      cursor: pointer;
      &:hover {
        background-color: #e74848;
      }
      &:active {
        transform: scale(0.975);
      }
    }
  }
  .post-banner-header {
    position: relative;
    .post-banner {
      padding: 16px
    }
    .post-input-banner {
      font-family: 'Inter', 'Helvetica Neue', 'Segoe UI', 'Fira Sans', Roboto, Oxygen, Ubuntu, 'Droid Sans', 'Arial', sans-serif !important;
      padding: 16px;
      font-size: 16px;
      line-height: 24px;
      border: 0;
      color: #7a92ef;
    }
    .post-delete-description {
      position: absolute;
      top: 10px;
      right: 16px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/delete.png);
      background-size: 50% 50%;
      background-color: #f2f2f2;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
        transition: all 200ms ease;
      &:hover {
        background-color: #ebebeb;
      }
      &:active {
        transform: scale(0.975);
      }
    }
    .post-upload {
      position: absolute;
      top: 10px;
      right: 56px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/add-file.png);
      background-size: 50% 50%;
      background-color: #f2f2f2;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      transition: all 200ms ease;
      &:hover {
        background-color: #ebebeb;
      }
      &:active {
        transform: scale(0.975);
      }  
    }
  }
  .post-picture {
    position: relative;
    width: 100%;
    .post-img {
      width: 100%;
    }
    .post-delete-img {
      position: absolute;
      top: 16px;
      right: 16px;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-image: url(@/assets/img/delete.png);
      background-size: 50% 50%;
      background-color: #f2f2f2;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      transition: all 200ms ease;
      &:hover {
        background-color: #ebebeb;
      }
      &:active {
        transform: scale(0.975);
      }
    }
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