<template lang="pug">
.main
  user-toolbar
  user-feed
  user-news
</template>

<script>
export default {
  // layout: 'standartPage'
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
}

</style>