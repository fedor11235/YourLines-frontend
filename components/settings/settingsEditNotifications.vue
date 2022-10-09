<template lang="pug">
.settings-edit-notifications
    header-feed(:title="$t('SETTINGS.NOTIFICATIONS_TITLE')")
    .edit-notifications-info
        .edit-notifications-title {{$t('SETTINGS.NOTIFICATIONS_SUBTITLE')}}
        .edit-notifications-checkbox
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
.settings-edit-notifications {
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .edit-notifications-info {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fdfdfd;
        max-width: 640px;
        .edit-notifications-delmiter {
            height: 8px;
            width: 100%;
            background-color: #f2f2f2
        }
        .edit-notifications-title {
            margin: 16px;
            font-size: 21px;
            font-weight: 500;
            margin-bottom: 21px;
        }
        .edit-notifications-input {
            margin: 16px;
            font-size: 16px;
            font-weight: 500;
            padding: 10px 16px;
            border: 1px solid #8a96a3;
            border-radius: 5px;
            height: 40px;
        }
        .edit-notifications-textarea {
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

        .edit-notifications-botton {
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