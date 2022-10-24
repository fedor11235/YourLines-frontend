<template lang="pug">
.login-cover
  img.cover-img(src="@/assets/img/logo.png")
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.login-cover {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background-size: auto;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-image: url(@/assets/img/logo.png);
  .cover-img {
    padding: 0 64px;
    width: 100%;

  }
}

</style>