<template lang="pug">
.user-messages
  header-messages
  .messages-body
    dialog-item(
      v-for="(dialog, index) in dialogs" 
      :key="index" 
      :user="dialog.userDialog" 
      :lastMessages="dialog.text"
      @click="handlerClickDualog(dialog.roomId)"
      )
</template>
<script>
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialogs: []
    }
  },
  // computed: {
  //   ...mapState({
  //     userTransitionId: state => state.userTransition.id
  //   })
  // },
  async created() {
    this.dialogs = await this.$messagesService.getMessages()
  },
  methods: {
    handlerClickDualog(roomId) {
      this.$router.push(`/messages/new/${roomId}`)
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