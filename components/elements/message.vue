<template lang="pug">
.message(:class="`message-${type}`")
  .message-text(:class="`message-text-${type}`") {{text}}
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
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
  &.message-another {
    text-align: left;
    .message-text-another {
      border-radius: 10px 10px 10px 0px;
    }
  }
  &.message-you {
    text-align: right;
    .message-text-you {
      border-radius: 10px 10px 0px 10px;
    }
  }
}
</style>