<template lang="pug">
.header-messages
    .messages-header
        .messages-title(v-if="!modeSearch") Messages
        input.messages-input(v-if="modeSearch" v-model="searchUser" placeholder="Search user")
        .messages-search(@click="modeSearch=true")
        .messages-cansel(v-if="modeSearch" @click="modeSearch=false")
        .messages-add(v-if="!modeSearch" @click="$router.push('/messages/new')")
    hr.messages-separate
</template>
<script>
export default {
    data() {
        return {
            modeSearch: false,
            searchUser: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.header-messages {
    .messages-header {
        position: relative;
        display: flex;
        align-items: center;
        height: 56px;
        padding: 16px;
        position: relative;
        background-color: #fdfdfd;
        width: 100%;
        .messages-title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
        }
        .messages-cansel {
            position: absolute;
            left: 16px;
            top: 16px;
            width: 20px;
            height: 20px;
            margin-right: 12px;
            background-size: cover;
            background-image: url(@/assets/img/delete.png);
            cursor: pointer;
        }
        .messages-search {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 20px;
            height: 20px;
            background-size: cover;
            background-image: url(@/assets/img/search.png);
            cursor: pointer;
        }
        .messages-add {
            position: absolute;
            right: 54px;
            top: 16px;
            width: 20px;
            height: 20px;
            background-size: cover;
            background-image: url(@/assets/img/plus.png);
            cursor: pointer;
        }

        .messages-input {
            margin-left: 36px;
            margin-right: 36px;
            width: 100%;
            font-size: 16px;
            font-weight: 500;
            padding: 10px 16px;
            // border: 1px solid #8a96a3;
            border: 0;
            border-radius: 5px;
            height: 40px;
        }

    }
}
</style>