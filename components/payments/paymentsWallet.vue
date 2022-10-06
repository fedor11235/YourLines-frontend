<template lang="pug">
.payments-wallet
    .wallet-score
        .wallet-money ${{money}}
        .wallet-header Wallet Credits
        hr.wallet-delmiter
        .wallet-title ADD FUNDS TO YOUR WALLET
        a.wallet-button(href="/payments/card") ADD FUNDS TO YOUR WALLET
        br
    .wallet-history
        .wallet-title LATEST TRANSACTIONS
        .wallet-no-payments(v-if="paymentHistory.length === 0")
            .wallet-payments-title Payments have not yet been made.
            img.wallet-img(src="@/assets/img/payment.png")
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
.payments-wallet {
    padding: 16px;
    .wallet-score {
        background-color: #fdfdfd;
        border-radius: 6px;
        border: 1px solid rgba(138,150,163,.25);
        padding: 16px;
        margin-bottom: 16px;
        .wallet-money {
            font-size: 22px;
            line-height: 28px;
            font-weight: 500;
        }

        .wallet-header {
            font-size: 18px;
        }

        .wallet-delmiter {
            margin: 16px 0;
            background-color: rgba(138,150,163,.25);
        }

        .wallet-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 21px;
            opacity: 0.4;
        }
    }
    .wallet-history {
        background-color: #fdfdfd;
        border-radius: 6px;
        border: 1px solid rgba(138,150,163,.25);
        padding: 16px;
        height: 400px;
        .wallet-no-payments {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100%;

            .wallet-payments-title {
                margin-bottom: 8px;
                font-weight: 500;
                opacity: 0.3;
                text-align: center;
            }
            .wallet-img {
                width: 48px;
                height: 48px;
                opacity: 0.1;
                margin-top: 8px;
            }
        }
    }
}
</style>