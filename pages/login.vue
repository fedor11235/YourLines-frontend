<template lang="pug">
.login
  login-cover
  login-form
  modal-help
</template>

<script>
import authorized from '@/mixins/authorized'
export default {
  mixins: [authorized],
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

</style>