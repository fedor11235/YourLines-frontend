<template lang="pug">
.header-creator
    .creator-header
        .creator-title(v-if="!modeSearch") creator
        input.creator-input(v-if="modeSearch" v-model="searchUser" placeholder="Search user")
        .creator-information(v-if="!modeSearch" @click="$router.push('/messages/new')")
    hr.creator-separate
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.header-creator {
    .creator-header {
        position: relative;
        display: flex;
        align-items: center;
        height: 56px;
        padding: 16px;
        position: relative;
        background-color: #fdfdfd;
        width: 100%;
        .creator-title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
        }
        .creator-information {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 20px;
            height: 20px;
            background-size: cover;
            background-image: url(@/assets/img/information.png);
            cursor: pointer;
        }
    }
}
</style>