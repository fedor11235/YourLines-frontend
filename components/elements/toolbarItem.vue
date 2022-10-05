<template lang="pug">
.toolbar-item
    .item(:style="{backgroundImage: `url(${require(`@/assets/img/${icon}.png`)})`}")
    | {{label}}
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },        
        label: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.toolbar-item {
    display: flex;
    align-items: center;
    .item {
        width: 21px;
        height: 21px;
        margin-left: -16px;
        margin-right: 12px;
        background-size: 98% 98%;
        background-repeat: no-repeat;
    }
}
</style>