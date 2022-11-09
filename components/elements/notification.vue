<template lang="pug">
.notification
  .notification-avatar(:style="setImageAvatar")
  .notification-text
    .notification-link {{link}}
    |&nbsp {{text}}
    .notification-date {{date}}
</template>
<script>
import bufferToBase64 from '@/mixins/bufferToBase64'
export default {
  mixins: [bufferToBase64],
  props: {
    avatar: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
  computed: {
    setImageAvatar() {
      if(this.avatar) {
        return {
          backgroundImage: `url(${this.bufferToBase64(avatar)})`,
          backgroundSize: 'cover'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.notification {
  display: flex;

  min-height: 57px;
  background-color: white;
  padding: 12px;
  .notification-avatar {
    height: 33px;
    width: 33px;
    border-radius: 50%;
    background-image: url(@/assets/img/avatar.png);
    background-size: 50% 50%;
    background-color: #f2f2f2;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 12px;
    z-index: 2;
    cursor: pointer;
  }
  .notification-text {
    top: 12px;
    left: 57px;
    font-size: 12px;
    .notification-link {
      display: inline;
      font-weight: 500;
    }
  }
  .notification-data {
    font-size: 10px;
  }
}
</style>