<template lang="pug">
.post-item
    .post-redaction
            .post-preview
            .post-specification
                .post-preview-nickname {{item.user.nickname}}
                .post-preview-link {{item.user.link}}
    .post-header {{item.header}}
    img.post-img(v-if="item.image" :src="convertBuffToBlob(item.image)")
    .post-description {{item.description}}
    .post-action
        .post-like
            .post-like-count
        .post-comments
            .post-comments-count
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
    ...mapState({
        // description: state => state.user.description,
        // nickname: state => state.user.nickname,
        // link: state => state.user.link
    })
    },
    methods: {
        convertBuffToBlob(imageBuff) {
            return Buffer.from(imageBuff, "base64")
        }
    }
}
</script>
<style lang="scss" scoped>

.post-item {
    background-color: #fdfdfd;
    margin: 2px 0;
    
    .post-redaction {
        position: relative;
        height: 60px;
        .post-preview {
            position: absolute;
            top: 6px;
            left: 16px;
            height: 48px;
            width: 48px;
            border-radius: 50%;
            background-image: url(@/assets/img/avatar.png);
            background-size: 50% 50%;
            background-color: #f2f2f2;
            background-repeat: no-repeat;
            background-position: center;
            z-index: 2;
        }

        .post-specification {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            left: 82px;
            .post-preview-nickname {
                font-size: 16px;
            }
            .post-preview-link {
                font-size: 14px;
                color: #8a96a3;
            }
        }
    }

    .post-header {
        padding: 16px;
    }
   .post-img {
    width: 100%;
   }
   .post-action{
        display: flex;
        justify-content: flex-end;
        padding: 16px;
        .post-like {
            cursor: pointer;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 70% 70%;
            background-image: url(@/assets/img/like.png);
            transition: all 200ms ease;
            &:hover {
                background-color: #f2f2f2;
            }
        }
        .post-comments {
            margin-left: 8px;
            cursor: pointer;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 70% 70%;
            background-image: url(@/assets/img/comments.png);
            transition: all 200ms ease;
            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
}
</style>