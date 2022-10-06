<template lang="pug">
.messages-choises 
    .choises-header Select any conversation or send a new message
    .choises-button(@click="$router.push('/messages/new')") A new message
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.messages-choises {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 640px;
    height: 100vh;
    background-color: #fdfdfd;
    align-items: center;
    justify-content: center;
    .choises-header {
        margin-bottom: 8px;
        font-size: 21px;
        font-weight: 500;
        text-align: center;
    }
    .choises-button {
        margin-top: 8px;
      display: flex;
      align-items: center;
    justify-content: center;
      background-color: #a0b9f1;
      border-radius: 1000px;
      width: 180px;
      height: 48px;
      cursor: pointer;
      font-size: 18px;
      color: #fdfdfd;
      transition: all 200ms ease;
      // border: 1px solid #8a96a3;
      &:hover {
        background-color: #7a92ef;
      }
      &:active {
        transform: scale(0.975);
      }
    }
}
</style>