<template lang="pug">
.header-feed
    .feed-created
        .feed-header
            .feed-title {{title}}
            .feed-settings(v-if="settings" @click="$router.push(link)")
        hr.feed-separate
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        settings: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.header-feed {
    .feed-created {
        position: relative;
        background-color: #fff;
        .feed-header {
            position: relative;
            display: flex;
            align-items: center;
            .feed-title {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.9);
                padding: 16px;
            }
        }
        .feed-settings {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 20px;
            height: 20px;
            margin-left: -16px;
            margin-right: 12px;
            background-size: cover;
            background-image: url(@/assets/img/settings.png);
            cursor: pointer;
        }
    }
}
</style>