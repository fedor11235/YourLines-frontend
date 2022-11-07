<template lang="pug">
.messages
    user-toolbar
    messages-new
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
    console.log(this.$route.params)
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