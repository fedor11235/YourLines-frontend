<template lang="pug">
.creator-info
    header-creator
    .creator-info-body
        warning(v-if="!approved")
            | Your account has not been approved.
            .creator-info-delmiter
            | We are unable to accept your recent referral application:
            .creator-info-delmiter
            | - An additional form of ID is currently required (preferably: foreign passport with English letters)
            .creator-info-delmiter
            | . Please note the possible requirements that must be met for ANY uploaded photo:
            .creator-info-delmiter
            | 1. Images cannot be cropped or resized;
            .creator-info-delmiter
            | 2. All images must be in color;
            .creator-info-delmiter
            | 3. The proposed documents must be in the form of photographs or scanned copies. Electronic documents or photographs photographs will
            .creator-info-delmiter
            | deviations.
            .creator-info-delmiter
            | 4. All 4 documents must be kept;
            .creator-info-delmiter
            | 5. All issued, unexpired ID must be presented. No parts of the document can be edited,
            .creator-info-delmiter
            | closed, cut or censored;
            .creator-info-delmiter
            | 6. Files must be in .PNG or .JPG format and no larger than 7 MB;
            .creator-info-delmiter
            | Please note: If the documents you submit are not covered by ALL of the templates above, your application will not be
            .creator-info-delmiter
            | processed and additional documents will be requested. This review keeps your applications for 24-48 hours.
            .creator-info-delmiter
            | Thank you!
        .creator-info-delmiter
        information(v-if="!approved") We recommend using a mobile device or a device with a camera to perform this verification step
        .creator-info-delmiter
        button.creator-info-button(@click="$router.push('/create')") Full check
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