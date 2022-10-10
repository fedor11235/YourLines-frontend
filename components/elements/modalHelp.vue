<template lang="pug">
.modal-help
    .help-ask(v-if="!ifOpen" @click="handlerOpen")
    .help-back(v-if="ifOpen" @click="handlerClose")
    .help-modal(v-show="ifOpen")
        .help-header
            .help-hi {{$t('HELP.HELLO')}}
            .horizontal-divider
            .help-question {{$t('HELP.QUESTION')}}
        .help-body
            .help-wrap
                textarea.help-input(tabindex="0" ref="textarea" :placeholder="$t('HELP.SEND')")
            .help-send
</template>
<script>
export default {
    data() {
        return {
            ifOpen: false
        }
    },
    methods: {
        handlerHeightChange(event) {
            if(event.target.scrollTop > 0 && event.target.scrollHeight <= 164) {
                event.target.style.height = event.target.scrollHeight + "px";
            }
        },
        handlerOpen() {
            this.ifOpen = true
            this.$refs.textarea.style.height = '24px'
            this.$refs.textarea.addEventListener('keydown', this.handlerHeightChange)
        },
        handlerClose() {
            this.ifOpen = false
            this.$refs.textarea.value = ""
            this.$refs.textarea.removeEventListener('keydown', this.handlerHeightChange)
        }
    }
}
</script>
<style lang="scss" scoped>
.modal-help {
    .help-ask {
        height: 42px;
        width: 42px;
        position: fixed;
        bottom: 25%;
        right: 0;
        background-image: url(@/assets/img/help.png);
        background-size: 70% 70%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 4px 0 0 4px;
        cursor: pointer;
        background-color: #a0b9f1;
        overflow: hidden;
        &:hover {
            background-color: #7a92ef;
        }
    }
    .help-back {
        height: 42px;
        width: 42px;
        position: fixed;
        bottom: 32px;
        right: 0;
        background-image: url(@/assets/img/arrow2.png);
        background-size: 50% 50%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 0 0 4px 4px;
        cursor: pointer;
        transform: rotate(90deg);
        background-color: #a0b9f1;
        &:hover {
            background-color: #7a92ef;
        }
    }
    .help-modal {
        position: fixed;
        bottom: 90px;
        right: 0;
        border-radius: 8px 0 0 8px;
        height: 320px;
        max-width: 300px;
        width: 100%;
        background-color: $color4;
        box-shadow: 0 .5rem 1rem #f2f2f2;
        .help-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 8px 0 0 0;
            height: 120px;
            border-radius: $color4;
            background-color: $color3;
            padding: 32px;
            .help-hi {
                color: $color2;
                font-size: 24px;
                font-weight: 500;
            }
            .help-question {
                color: $color2;
                font-size: 18px;
            }
        }
        .help-body {
            height: 200px;
            position: relative;
            background-color: $color2;
            .help-wrap {
                position: absolute;
                bottom: 0px;
                left: 0px;
                right: 0px;
                max-height: 200px;
                min-height: 56px;
                border-top: 1px solid rgb(230, 230, 230);
                padding: 16px 52px 16px 16px;
                border-radius: 0 0 0 8px;
                background-color: $color4;
                .help-input {
                    width: 100%;
                    height: 100%;
                    border-radius: 0 0 0 8px;
                    color: $color1;
                    resize: none;
                    border: none;
                    font-size: 14px;
                    overflow: hidden;
                }
            }
            .help-send {
                position: absolute;
                right: 16px;
                bottom: 24px;
                width: 20px;
                height: 20px;
                background-size: cover;
                background-image: url(@/assets/img/send.png);
                cursor: pointer;
            }
        }
    }
}
</style>