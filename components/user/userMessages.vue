<template lang="pug">
.user-messages
  header-messages
  .messages-body
    .messages-item
      .messages-avatar
      .messages-info
        .messages-nickname {{user.nickname}}
        .messages-last-messages {{user.lastMessages}}
      .messages-date {{user.date}}
    .messages-item
      .messages-avatar
      .messages-info
        .messages-nickname {{user.nickname}}
        .messages-last-messages {{user.lastMessages}}
      .messages-date {{user.date}}
    .messages-item
      .messages-avatar
      .messages-info
        .messages-nickname {{user.nickname}}
        .messages-last-messages {{user.lastMessages}}
      .messages-date {{user.date}}
</template>
<script>
export default {
  data() {
    return {
      user: {
        nickname: 'test-user',
        lastMessages: 'Привет я тут чилю подписывайся там копец',
        date: 'apr 23, 2021'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.user-messages {
  .messages-body {
    .messages-item {
      position: relative;
      margin: 8px;
      border-radius: 16px;
      height: 114px;
      background-color: #fdfdfd;
      cursor: pointer;
      .messages-avatar {
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
      .messages-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        left: 114px;
        height: 100%;
        width: 417px;
        width: calc(100% - 154px);
        .messages-nickname {
          color: black;
          font-size: 18px;
          font-weight: 500;
        }
        .messages-last-messages {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .messages-date {
        position: absolute;
        top: 8px;
        right: 8px;
        color: $color8;
      }
    }
  }
}
</style>