<template lang="pug">
.information
    .information-icon
    .information-text
        slot
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.information {
    position: relative;
    padding: 10px 16px 10px 20px;
    border: 1px solid rgba(0,175,240,.25);
    border-left: 20px solid rgba(0,175,240,.25);
    border-radius: 6px;
    min-height: 53px;
    .information-icon {
        position: absolute;
        left: 6px;
        width: 21px;
        height: 21px;
        margin-left: -16px;
        margin-right: 12px;
        background-size: 98% 98%;
        background-repeat: no-repeat;
        background-image: url(@/assets/img/information.png);
    }
}
</style>