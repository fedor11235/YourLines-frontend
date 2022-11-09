<template lang="pug">
.messages
    user-toolbar
    user-messages
    messages-write(:roomId="$route.params.roomId")
    //- messages-search
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
  },
  created() {
  }
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