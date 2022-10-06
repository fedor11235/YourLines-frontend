<template lang="pug">
.user-subscriptions
    header-feed(title="SUBSCRIPTIONS")
    .subscriptions-input
        .subscriptions-cansel(v-if="serachMode" @click="serachMode=false")
        .subscriptions-text(v-if="!serachMode" @click="serachMode=true") Search
        input.subscriptions-search(v-if="serachMode" v-model="serachSubscriptions" placeholder="user search")
        .subscriptions-icon(v-if="!serachMode" @click="serachMode=true")
</template>
<script>
export default {
    data() {
        return {
            serachMode: false,
            serachSubscriptions: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.user-subscriptions {
    max-width: 640px;
    .subscriptions-input {
        position: relative;
        padding-bottom: 16px;
        background: #fdfdfd;
        .subscriptions-icon {
            position: absolute;
            top: 10px;
            right: 16px;
            width: 20px;
            height: 20px;
            background-image: url(@/assets/img/search.png);
            background-size: cover;
            background-position: center;
            cursor: pointer;
        }
        .subscriptions-text {
            font-size: 16px;
            padding: 10px 0;
            margin-left: 52px;
            height: 40px;
            color: #8a96a3;
            cursor: pointer;
        }
        .subscriptions-search {
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
        .subscriptions-cansel {
            position: absolute;
            left: 16px;
            top: 10px;
            width: 20px;
            height: 20px;
            margin-right: 12px;
            background-size: cover;
            background-image: url(@/assets/img/delete.png);
            cursor: pointer;
        }
    }
}
</style>