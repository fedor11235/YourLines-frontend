<template lang="pug">
.settings-edit-account
    header-feed(title="Account editing")
    .edit-account-info
        .edit-account-title {{$t('SETTINGS.ACCOUNT_INFORMATION')}}
        input-label(v-model="nicknameSave" placeholder="nickname")
        .horizontal-divider
        input-label(v-model="emailSave" placeholder="email")
        .horizontal-divider
        input-label(v-model="passwordSave" placeholder="phone number")
        .horizontal-divider

        .edit-account-title {{$t('SETTINGS.SAFETY')}}
        .edit-account-botton(v-if="!createPassword" @click="createPassword=true") {{$t('SETTINGS.CREATE_PASSWORD')}}
        .edit-account-botton(v-if="createPassword" @click="createPassword=false") {{$t('SETTINGS.CANCEL_PASSWORD')}}
        input-label(v-if="createPassword" v-model="passwordNew" placeholder="password")
        .horizontal-divider
        input-label(v-if="createPassword" v-model="passwordСonfirm" placeholder="password")
        .horizontal-divider

        .edit-account-title {{$t('SETTINGS.ACCOUNT_MANAGEMENT')}}
        .edit-account-botton {{$t('SETTINGS.DELETE_YOUR_ACCOUNT')}}
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            nicknameSave: '',
            emailSave: '',
            phoneSave: '',
            passwordSave: '',
            passwordСonfirm: '',
            createPassword: false,
        }
    },
    computed: {
        ...mapState({
            nickname: state => state.user.nickname,
            email: state => state.user.email,
            phone: state => state.user.phone,
        }),
    },
    bedoreCreated() {
        this.nicknameSave = this.nickname
        this.emailSave = this.email
        this.phoneSave = this.phone
    }
}
</script>
<style lang="scss" scoped>
.settings-edit-account {
    max-width: 640px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .edit-account-info {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fdfdfd;
        padding: 16px;
        .edit-account-delmiter {
            height: 8px;
            width: 100%;
            background-color: #f2f2f2
        }
        .edit-account-title {
            font-size: 21px;
            font-weight: 500;
            margin-bottom: 21px;
        }
        .edit-account-input {
            margin: 16px;
            font-size: 16px;
            font-weight: 500;
            padding: 10px 16px;
            border: 1px solid #8a96a3;
            border-radius: 5px;
            height: 40px;
        }
        .edit-account-textarea {
            font-size: 16px;
            font-weight: 500;
            padding: 10px 16px;
            border: 1px solid #8a96a3;
            border-radius: 5px;
            resize: none;
            height: 80px;
            &::placeholder {
                font-size: 16px;
                font-weight: 400;
                font-family: 'Inter', 'Helvetica Neue', 'Segoe UI', 'Fira Sans', Roboto, Oxygen, Ubuntu, 'Droid Sans', 'Arial', sans-serif !important;
            }
        }

        .edit-account-botton {
            line-height: 40px;
            font-size: 16px;
            text-align: center;
            margin-bottom: 21px;
            height: 40px;
            cursor: pointer;
            border-top: 1px solid #8a96a3;
            border-bottom: 1px solid #8a96a3;
            &:hover {
                background-color: #a0b9f1;
            }
        }
    }
}
    </style>