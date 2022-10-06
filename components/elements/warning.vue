<template lang="pug">
.warning
    .warning-icon
    .warning-text
        slot
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.warning {
    position: relative;
    padding: 10px 16px 10px 20px;
    border: 1px solid rgba(255, 96, 96, 0.25);
    border-left: 20px solid rgba(255, 96, 96, 0.25);
    border-radius: 6px;
    min-height: 53px;
    .warning-icon {
        position: absolute;
        left: 6px;
        width: 21px;
        height: 21px;
        margin-left: -16px;
        margin-right: 12px;
        background-size: 98% 98%;
        background-repeat: no-repeat;
        background-image: url(@/assets/img/warning.png);
    }
}
</style>