<template lang="pug">
.suggestions(@click="handlerOpenLink(user.link)")
    img.suggestions-header(:src="bufferToBase64(user.headerImage)")
    .suggestions-info
      .suggestions-nickname {{user.nickname}}
      .suggestions-link @{{user.link}}
    img.suggestions-avatar(:src="bufferToBase64(user.avatar)")
    .suggestions-menu
</template>
<script>
import bufferToBase64 from '@/mixins/bufferToBase64'
import handlerOpenLink from '@/mixins/handlerOpenLink'
export default {
  mixins: [bufferToBase64, handlerOpenLink],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.suggestions {
  position: relative;
  height: 128px;
  width: 358px;
  margin-bottom: 16px;
  cursor: pointer;
  .suggestions-header {
    width: 100%;
    height: 128px;
    border-radius: 6px;
    object-fit: cover;
    background-image: url(@/assets/img/test-header.jpeg);
    background-size: cover;
  }
  .suggestions-avatar {
    position:absolute;
    top: 14px;
    left: 14px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    outline: 4px solid white;
    background-image: url(@/assets/img/avatar.png);
    background-size: 50% 50%;
    background-color: #f2f2f2;
    background-repeat: no-repeat;
    background-position: center;
  }
  .suggestions-info {
    position:absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    height: 64px;
    background-color: rgba(0,0,0,.25);
    border-radius: 0 0 6px 6px;
    .suggestions-nickname {
      font-size: 19px;
      line-height: 24px;
      color: #fefefe;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 500;
    }
    .suggestions-link {
      font-size: 14px;
      line-height: 18px;
      color: #fefefe;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .suggestions-menu {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 36px;
    background-image: url(@/assets/img/menu.png);
    background-position: center;
    background-size: auto 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: rgba(255,255,255,.1);
    cursor: pointer;
    &:hover {
      background-color: rgba(255,255,255,.25);
    }
  }
}
</style>