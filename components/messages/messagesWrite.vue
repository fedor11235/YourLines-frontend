<template lang="pug">
.messages-write
  header-feed.test(title="Написать сообщение")
  .write-container
    .write-body.scroll
      message(v-for="(message, index) in messages" :key="index" :nicknameProp="message.nickname" :text="message.text")
    .write-input
      input(v-model="messageNew")
      .write-submit(@click="hendlerSendMessage") Отправить
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    roomId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      socket: null,
      messageNew: '',
      messages: []
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.user.nickname,
      userId: state => state.user.id,
      userTransitionId: state => state.userTransitionId
    })
  },
  mounted() {
    if(!this.socket) {
        this.socket = this.$nuxtSocket({
        channel: '/chat',
        query: {
          nickname: this.nickname,
          roomId: this.roomId
        }
      })
      this.socket
      .on("log", (log) => console.log(log))
      .on("messages", this.handlerResponseAllMessages)
      .emit("messages:get")
    }
  },
  destroyed() {
    this.socket = null
  },
  methods: {
    hendlerSendMessage() {
      this.socket.emit('message:post', {
        userId: this.userTransitionId,
        nickname: this.nickname,
        text: this.messageNew,
        roomId: this.roomId,
      })
      this.messageNew = ''
    },
    handlerResponseAllMessages(msg, cb) {
      if(Array.isArray(msg)) {
        this.messages.push(...msg)
      } else {
        this.messages.push(msg)
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.write-container {
  overflow: hidden;
}
.messages-write {
  position: relative;
  width: 100%;
  max-width: 640px;
  height: 100vh;
  background-color: #fdfdfd;
  .write-body {
    position: absolute;
    width: 100%;
    top: 56px;
    padding: 8px;
    max-height: calc(100% - 198px);
    overflow-y: scroll;
    .write-container-you {
      width: 100%;
      text-align: right;
      padding: 8px;
      .write-you {
        display: inline-block;
        background-color: #D8DCFF;
        padding: 8px 16px;
        border-radius: 10px 10px 0px 10px;
      }
    }
    .write-container-another {
      width: 100%;
      text-align: left;
      padding: 8px;
      .write-another {
        display: inline-block;
        background-color: #D8DCFF;
        padding: 8px 16px;
        border-radius: 10px 10px 10px 0px;
      }
    }
  }
  .write-input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 16px 32px;
    border-top: 2px solid #A6ABDA;
    input {
      width: 100%;
      padding: 8px;
      border: 2px solid #A6ABDA;
      border-radius: 8px;
    }
  }
  .write-submit {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #a0b9f1;
    border-radius: 1000px;
    cursor: pointer;
    font-size: 18px;
    color: #fdfdfd;
    transition: all 200ms ease;
    margin-top: 16px;
    padding: 8px 0;
    &:hover {
      background-color: #7a92ef;
    }
    &:active {
      transform: scale(0.975);
    }
    &.toolbar-active {
      background-color: #f2f2f2;
      color: rgba(0, 0, 0, 0.9);
    }
  }
}
</style>