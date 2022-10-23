<template lang="pug">
.settings-profile
    user-toolbar
    user-settings
    settings-edit-profile
    modal-help
</template>

<script>
import { mapState } from 'vuex'
import authorized from '@/mixins/authorized'
export default {
  mixins: [authorized],
    computed: {
    ...mapState({
        page: state => state.page
    })
    }
}
</script>

<style lang="scss" scoped>
.settings-profile {
    height: 100vh;
    display: grid;
    background-color: transparent;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 1fr;
}
</style>