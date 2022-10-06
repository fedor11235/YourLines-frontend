<template lang="pug">
.card
    user-toolbar
    payments-add-card
    payments-Wallet

</template>

<script>
export default {
    name: 'page-messages'
}
</script>

<style lang="scss" scoped>
.card {
    height: 100vh;
    display: grid;
    background-color: transparent;
    grid-template-columns: 1fr 2fr 1fr;
}
</style>