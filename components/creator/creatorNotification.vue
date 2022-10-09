<template lang="pug">
.creator-notification
    .creator-notification-history
        .creator-notification-title {{$t('CREATOR.HISTORY_TITLE')}}
        .creator-notification-no-payments(v-if="paymentHistory.length === 0")
            .creator-notification-payments-title {{$t('CREATOR.HISTORY_NO')}}
            img.creator-notification-img(src="@/assets/img/bank.png")
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            money: state => state.user.money,
            paymentHistory: state => state.user.paymentHistory,
        }),
    }
}
</script>
<style lang="scss" scoped>
.creator-notification {
    padding: 16px;
    min-height: 350px;
    .creator-notification-history {
        background-color: #fdfdfd;
        border-radius: 6px;
        border: 1px solid rgba(138,150,163,.25);
        padding: 16px;
        .creator-notification-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 21px;
            opacity: 0.4;
        }
        .creator-notification-no-payments {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100%;

            .creator-notification-payments-title {
                margin-bottom: 8px;
                font-weight: 500;
                opacity: 0.3;
                text-align: center;
            }
            .creator-notification-img {
                width: 48px;
                height: 48px;
                opacity: 0.1;
                margin-top: 8px;
            }
        }
    }
}
</style>