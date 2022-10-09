<template lang="pug">
.user-settings
    header-feed(:title="$t('SETTINGS.TITLE')")
    .settings-feed
        .settings-nickname
            .settings-link {{nickname}}
        .settings-property(@click="$router.push('/settings/profile')")
            | {{$t('SETTINGS.PROFILE')}}
            .settings-arrow
        .settings-property(@click="$router.push('/settings/account')")
            | {{$t('SETTINGS.ACCOUNT')}}
            .settings-arrow
        .settings-property(@click="$router.push('/settings/language')")
            | {{$t('SETTINGS.LANGUAGE')}}
            .settings-arrow
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
    ...mapState({
        description: state => state.user.description,
        nickname: state => state.user.nickname,
        link: state => state.user.link
    })
  },
}
</script>
<style lang="scss" scoped>
.user-settings {
    .settings-feed {
        margin-top: 8px;
        .settings-nickname {
            background-color: #fdfdfd;
            padding: 10px 40px 10px 16px;
            margin-bottom: 2px;
            font-weight: 500;
            .settings-link {
                font-weight: 500;
                cursor: pointer;
                &:hover {
                    color: #7a92ef;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
            }
        }
        .settings-property {
            position: relative;
            background-color: #fdfdfd;
            padding: 10px 40px 10px 16px;
            margin-bottom: 2px;
            cursor: pointer;
            &:hover {
                background-color: #a0b9f1;
                color: #fdfdfd;
                background-size: 90% 90%;
            }
            .settings-arrow {
                position: absolute;
                top: 16px;
                right: 16px;
                width: 16px;
                height: 16px;
                background-image: url(@/assets/img/arrow2.png);
                background-size: cover;
                background-position: center;
            }
        }
    }
}
</style>