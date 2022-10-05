<template lang="pug">
.header-feed
    .feed-created
        .feed-header
            .feed-title {{title}}
        hr.feed-separate
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.header-feed {
    .feed-created {
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
    }
}
</style>