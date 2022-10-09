<template lang="pug">
.creator-info
    header-creator
    .creator-info-body
        warning(v-if="!approved")
            | {{$t('CREATOR.TEXTS.1')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.2')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.3')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.4')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.5')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.6')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.7')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.8')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.9')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.10')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.11')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.12')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.13')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.14')}}
            .creator-info-delmiter
            | {{$t('CREATOR.TEXTS.15')}}
        .creator-info-delmiter
        information(v-if="!approved") {{$t('CREATOR.RECOMMEND')}}
        .creator-info-delmiter
        button.creator-info-button(@click="$router.push('/verification')") {{$t('CREATOR.CHECK')}}
        .creator-info-delmiter


</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            approved: state => state.user.approved
        }),
    }
}
</script>
<style lang="scss" scoped>
.creator-info {
    height: 100vh;
    background-color: #fdfdfd;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .creator-info-body {
        padding: 16px;
        text-align: right;
        .creator-info-delmiter {
            height: 16px;
        }
        .creator-info-button {
            position: relative;
            background-color: #a0b9f1;
            border-radius: 1000px;
            width: 180px;
            height: 48px;
            cursor: pointer;
            font-size: 18px;
            color: #fdfdfd;
            transition: all 200ms ease;
            &:hover {
                background-color: #7a92ef;
            }
            &:active {
                transform: scale(0.975);
            }
            &.toolbar-active {
                background-color: #f2f2f2;
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
}
</style>