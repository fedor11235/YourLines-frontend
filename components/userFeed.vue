<template lang="pug">
.user-feed
    .post-created(ref="post-created")
        .post-header
            .post-undo(v-if="title" @click="handlerUndo")
            .post-title Home
        hr.post-separate
        .post-input(ref="post-input" @input="handlerInput" placeholder="Create new post" contenteditable)
        .post-toolbar
            .post-icon
                .post-image
            .post-icon
                .post-interview
</template>
<script>
export default {
    data() {
        return {
            title: '',
            image: ''
        }
    },
    mounted() {
        // this.$refs['post-input'].style.width = this.$refs['post-created'].clientWidth + 'px'
    },
    methods: {
        handlerInput(e) {
            this.title = e.target.innerText
        },
        handlerUndo() {
            this.title = ''
            this.$refs['post-input'].innerText = ''
        }
    }
}
</script>
<style lang="scss" scoped>
.user-feed {
    .post-created {
        background-color: #fff;
        .post-header {
            display: flex;
            align-items: center;
            .post-undo {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                margin-left: 16px;
                background-image: url(../assets/img/arrow.png);
                background-size: 50% 50%;
                background-position: center;
                transform: rotate(180deg);
                background-repeat: no-repeat;
                transition: all 200ms ease;
                cursor: pointer;
                &:hover {
                    background-color: rgb(242,242,242);
                }
                &:active {
                   transform: scale(0.975);
                }
            }
            .post-title {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.9);
                padding: 16px;
            }
        }
        .post-input {
            min-height: 56px;
            max-height: 50vh;
            overflow-x: hidden;
            overflow-y: auto;
            border: none;
            padding: 16px 16px;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.9);
            &[placeholder]:empty::before {
                content: attr(placeholder);
                color: #555; 
            }
            &::placeholder {
                font-family: 'Inter', 'Helvetica Neue', 'Segoe UI', 'Fira Sans', Roboto, Oxygen, Ubuntu, 'Droid Sans', 'Arial', sans-serif !important;
                text-overflow: ellipsis;
            }
        }
        .post-toolbar {
            display: flex;
            padding: 16px;
            .post-icon {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 32px;
                height: 32px;
                margin-right: 16px;
                border-radius: 50%;
                background-color: rgb(242,242,242);
                cursor: pointer;
                &:hover {
                    border: 1px solid rgba(0, 0, 0, 0.9);
                }
                .post-image {
                    width: 16px;
                    height: 16px;
                    background-image: url(../assets/img/add-file.png);
                    background-size: cover;
                    background-position: center;
                }
                .post-interview {
                    width: 16px;
                    height: 16px;
                    background-image: url(../assets/img/interview.png);
                    background-size: cover;
                    background-position: center;
                }
            }
        }
    }
}
</style>