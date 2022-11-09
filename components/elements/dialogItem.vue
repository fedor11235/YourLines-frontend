<template lang="pug">
.dialog-item(@click="$emit('click')")
  .dialog-avatar
  .dialog-info
    .dialog-nickname {{user.nickname}}
    .dialog-last-messages {{lastMessages}}
  .dialog-date {{user.date}}
</template>
<script>
export default {
  name: 'dialog-item',
  props: {
    user: {
      type: Object,
      required: true
    },
    lastMessages: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog-item {
  position: relative;
  margin: 8px;
  border-radius: 16px;
  height: 114px;
  background-color: #fdfdfd;
  cursor: pointer;
  .dialog-avatar {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: #f2f2f2;
    background-image: url(@/assets/img/avatar-big.png);
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .dialog-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 114px;
    height: 100%;
    width: 417px;
    width: calc(100% - 154px);
    .dialog-nickname {
      color: black;
      font-size: 18px;
      font-weight: 500;
    }
    .dialog-last-messages {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .dialog-date {
    position: absolute;
    top: 8px;
    right: 8px;
    color: $color8;
  }
}
</style>