<template lang="pug">
.message(:style="setStyleMessage")
  .message-text(:style="setStyleText") {{text}}
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    nicknameProp: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.user.nickname
    }),
    setStyleMessage() {
      if(this.nicknameProp === this.nickname) {
        return 'text-align: right;'
      } else {
        return 'text-align: left;'
      }
    },
    setStyleText() {
      if(this.nicknameProp === this.nickname) {
        return 'border-radius: 10px 10px 0px 10px;'
      } else {
        return 'border-radius: 10px 10px 10px 0px;'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.message {
  width: 100%;
  padding: 8px;
  .message-text {
    display: inline-block;
    background-color: #D8DCFF;
    padding: 8px 16px;
  }
}
</style>