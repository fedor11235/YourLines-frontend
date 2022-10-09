<template lang="pug">
  .footer-page
    ul
      li Help
      li How it Work
      li Complaints Policy
      li Standard Contract between Fan and Creator
    ul
      li About
      li Cookie Notice
      li Security center
      li Terms of Service
    ul
      li DMCA
      li how yourLines was created
      li privacy
      li Acceptable use policy
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footer-page {
  display: flex;
  justify-content: space-evenly;
  height: 242px;
  width: 100vw;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
}
</style>