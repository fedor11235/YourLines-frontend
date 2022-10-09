<template lang="pug">
.payments-add-card
    header-feed(title="ADD A CARD")
    .add-card-body
        .add-card-title PAYMENT INFO
        .add-card-text We fully comply with the data security standards of the payment card industry.
        .add-card-inputs
            input-label(placeholder="Country")
            .vertical-divider
            input-label(placeholder="State / Province")
        .horizontal-divider
        input-label(placeholder="Street")
        .horizontal-divider
        .add-card-inputs
            input-label(placeholder="City")
            .vertical-divider
            input-label(placeholder="Postcode")
        .horizontal-divider
        .add-card-title BANK CARD DETAILS
        .add-card-inputs
            input-label(placeholder="Email")
            .vertical-divider
            input-label(placeholder="Name on the card")
        .horizontal-divider
        input-label(placeholder="Bankcard number")
        .horizontal-divider
        .add-card-inputs
            input-label(placeholder="Card expiry date")
            .vertical-divider
            input-label(placeholder="CVC")
        .horizontal-divider
        .add-card-checkboxes
            input.add-card-checkbox(type="checkbox" v-model="verifyAge")
            .vertical-divider
            .add-card-checktext Check here to certify that you are at least 18 years old and the legal age of residence
        .horizontal-divider
        information YourLines will make a one-time fee of $0.10 when you add your payment card. Fees will appear as "OnlyFans" on your credit card statement.
        .horizontal-divider
</template>
<script>
export default {
    data() {
        return {
            activeTab: 'cards',
            verifyAge: false
        }
    }
}
</script>
<style lang="scss" scoped>
.payments-add-card {
    height: 100vh;
    overflow-y: scroll;
    background-color: #fdfdfd;
    &::-webkit-scrollbar {
        width: 0;
    }
    .add-card-body {
        padding: 16px;
        .add-card-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 21px;
            opacity: 0.4;
        }
        .add-card-text {
            margin-bottom: 21px;
        }
        .add-card-inputs {
            display: flex;
        }
        .add-card-checkboxes {
            display: flex;
            .add-card-checkbox {
                height: 21px;
                width: 21px;
                cursor: pointer;
            }
        }
    }
}
</style>