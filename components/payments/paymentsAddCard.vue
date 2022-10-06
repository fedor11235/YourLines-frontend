<template lang="pug">
.payments-add-card
    header-feed(title="ADD A CARD")
    .add-card-body
        .add-card-title PAYMENT INFO
        .add-card-text We fully comply with the data security standards of the payment card industry.
        .add-card-inputs
            input.add-card-input(placeholder="Country")
            .add-card-vertical
            input.add-card-input(placeholder="State / Province")
        .add-card-horizontal
        input.add-card-input(placeholder="Street")
        .add-card-horizontal
        .add-card-inputs
            input.add-card-input(placeholder="City")
            .add-card-vertical
            input.add-card-input(placeholder="Postcode")
        .add-card-horizontal
        .add-card-title BANK CARD DETAILS
        .add-card-inputs
            input.add-card-input(placeholder="Email")
            .add-card-vertical
            input.add-card-input(placeholder="Name on the card")
        .add-card-horizontal
        input(placeholder="Bankcard number").add-card-input
        .add-card-horizontal
        .add-card-inputs
            input.add-card-input(placeholder="Card expiry date")
            .add-card-vertical
            input.add-card-input(placeholder="CVC")
        .add-card-horizontal
        .add-card-checkboxes
            input.add-card-checkbox(type="checkbox" v-model="verifyAge")
            .add-card-vertical
            .add-card-checktext Check here to certify that you are at least 18 years old and the legal age of residence
        .add-card-horizontal
        information YourLines will make a one-time fee of $0.10 when you add your payment card. Fees will appear as "OnlyFans" on your credit card statement.
        .add-card-horizontal
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
        .add-card-input {
            font-size: 16px;
            font-weight: 500;
            padding: 10px 16px;
            border: 1px solid #8a96a3;
            border-radius: 5px;
            height: 40px;
            width: 100%;
        }
        .add-card-checkboxes {
            display: flex;
            .add-card-checkbox {
                height: 21px;
                width: 21px;
                cursor: pointer;
            }
        }
        .add-card-horizontal {
            height: 21px;
        }
        .add-card-vertical {
            width: 16px;
        }
    }
}
</style>