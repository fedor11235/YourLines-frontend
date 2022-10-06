<template lang="pug">
.header-payments
    .payments-header
        .payments-title PAYMENT CARDS
        .payments-icon
        .payments-verify Verify
    .payments-tabs
        .payments-tab(:class="{'profile-active': activeTab==='cards'}" @click="activeTab='cards'") Your cards
        .payments-tab(:class="{'profile-active': activeTab==='payments'}" @click="activeTab='payments'") Payments
    hr.payments-separate
</template>
<script>
export default {
    data() {
        return {
            activeTab: 'cards'
        }
    }
}
</script>
<style lang="scss" scoped>
.header-payments {
    position: relative;
    background-color: #fdfdfd;
    margin-bottom: 8px;
    .payments-header {
        position: relative;
        display: flex;
        align-items: center;
        .payments-title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
            padding: 16px;
        }

        .payments-icon {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 20px;
            height: 20px;
            margin-left: -16px;
            margin-right: 12px;
            background-size: cover;
            background-image: url(@/assets/img/add-card.png);
            cursor: pointer;
        }

        .payments-verify {
            position: absolute;
            font-weight: 500;
            font-size: 18px;
            right: 72px;
            top: 12px;
            color: #a0b9f1;
            cursor: pointer;
            &:hover {
                color: #7a92ef;
            }
        }
    }
    .payments-tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 56px;
        background-color: #fdfdfd;
        .payments-tab {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            font-size: 21px;
            line-height: 24px;
            color: #8a96a3;
            border-bottom: 2px solid #fdfdfd;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
                border-bottom: 2px solid #ebebeb;
            }
            &.profile-active {
                color: #1A1A1A;
                border-bottom: 2px solid #1A1A1A;
            }
        }
    }
}
</style>