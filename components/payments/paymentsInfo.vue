<template lang="pug">
.payments-info
    .info-header
        .info-title {{$t('PAYMENTS.TITLE')}}
        .info-icon
        .info-verify {{$t('PAYMENTS.VERIFY')}}
    .info-tabs
        .info-tab(:class="{'info-active': activeTab==='cards'}" @click="activeTab='cards'") {{$t('PAYMENTS.HEADER_CARDS')}}
        .info-tab(:class="{'info-active': activeTab==='payments'}" @click="activeTab='payments'") {{$t('PAYMENTS.HEADER_PAYMENTS')}}
    .info-body
        .info-card(v-if="activeTab==='cards'")
            warning(v-if="!ifCards")
                | {{$t('PAYMENTS.CARD_WARNING_ONE')}} 
                a.info-href(:href="`/payments/card`") {{$t('PAYMENTS.CARD_WARNING_TWO')}}
                |&nbsp {{$t('PAYMENTS.CARD_WARNING_THREE')}}
            .info-payment(v-if="activeTab==='payments'")
            br
            .info-text {{$t('PAYMENTS.CARD_SECURITY')}}
        .info-history(v-if="activeTab==='payments'")
            img.info-img(v-if="paymentHistory.length === 0" src="@/assets/img/payment.png")
        
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            activeTab: 'cards'
        }
    },
    computed: {
        ...mapState({
            ifCards : state => state.user.ifCards,
            paymentHistory : state => state.user.paymentHistory
        })
    },
}
</script>
<style lang="scss" scoped>
.payments-info {

    .info-header {
        position: relative;
        display: flex;
        align-items: center;
        background-color: #fdfdfd;
        .info-title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
            padding: 16px;
        }

        .info-icon {
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

        .info-verify {
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
    .info-tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 56px;
        background-color: #fdfdfd;
        margin-bottom: 8px;
        .info-tab {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            font-size: 21px;
            line-height: 24px;
            height: 100%;
            color: #8a96a3;
            border-bottom: 2px solid #fdfdfd;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
                border-bottom: 2px solid #ebebeb;
            }
            &.info-active {
                color: #1A1A1A;
                border-bottom: 2px solid #1A1A1A;
            }
        }
    }

    .info-body {
        background-color: #fdfdfd;
        height: 100%;
        padding: 16px;
        .info-card {
            .info-href {
                color:#7a92ef;
                text-decoration: underline;
                text-underline-offset: 4px;
            }
        }
        .info-history {
            position: relative;
            height: 100%;
            .info-img {
                position: absolute;
                top: calc(30% - 100px);
                left: calc(50% - 100px);
                opacity: 0.1;
                margin: auto;
            }
        }
    }
}
</style>