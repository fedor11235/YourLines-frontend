<template lang="pug">
.messages
    user-toolbar
    user-messages
    messages-choises
    modal-help

</template>

<script>
export default {
  name: 'page-messages'
}
</script>

<style lang="scss" scoped>
.messages {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr;
}
</style>