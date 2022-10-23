<template lang="pug">
.settings-language
    user-toolbar
    user-settings
    settings-edit-language
    modal-help
</template>

<script>
import authorized from '@/mixins/authorized'
export default {
  mixins: [authorized],
}
</script>

<style lang="scss" scoped>
.settings-language {
    height: 100vh;
    display: grid;
    background-color: transparent;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr;
}
</style>