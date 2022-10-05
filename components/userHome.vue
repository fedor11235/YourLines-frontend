<template lang="pug">
.user-home
    input.post-upload(type="file" @change="handlerUploadImage" ref="fileInput" accept="image/*")
    .post-created(ref="post-created")
        .post-header
            .post-undo(v-if="header || image" @click="handlerUndo")
            .post-title Home
            button.post-save(v-if="header || image" @click="handlerSavePost") Post
        hr.post-separate
        .post-input(ref="post-input" @input="handlerInput" placeholder="Create new post" contenteditable)
        .post-toolbar
            .post-icon
                .post-image(@click="handlerOpenInput")
            .post-icon
                .post-interview
        .post-preview(v-if="image")
            .post-delete(@click="handlerDeleteImage")
            img.post-resurse(:src="image")
</template>
<script>
import fileInput from '../mixins/fileInput.js'
export default {
    // mixins: [fileInput],
    data() {
        return {
            header: null,
            image: null,
        }
    },
    methods: {
        handlerInput(e) {
            this.header = e.target.innerText
        },
        async handlerSavePost() {
            await this.$postsService.postAdd({image: this.image, header: this.header})
            this.image = null
            this.header = null
            this.$refs['post-input'].innerText = ''
        },
        handlerOpenInput() {
            this.$refs.fileInput.click()
        },
        handlerUploadImage() {
            const reader = new FileReader()
            reader.readAsDataURL(this.$refs.fileInput.files[0])
            reader.onload = () => {
                this.image = reader.result
            };
        },
        handlerUndo() {
            this.image = null
            this.header = null
            this.$refs['post-input'].innerText = ''
        },
        handlerDeleteImage() {
            this.image = null
        }
    }
}
</script>
<style lang="scss" scoped>
.user-home {
    .post-upload {
        display: none;
        visibility: hidden;
        width: 0;
        height: 0;
    }
    .post-created {
        background-color: #fff;
        .post-header {
            position: relative;
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
            .post-save {
                position: absolute;
                right: 16px;
                height: 24px;
                border-radius: 8px;
                font-size: 16px;
                width: 70px;
                cursor: pointer;
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
        .post-preview {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 140px;
            padding: 16px;
            position: relative;
            .post-delete {
                top: 4px;
                right: 4px;
                position: absolute;
                background-color: rgb(242,242,242);
                width: 21px;
                height: 21px;
                border-radius: 50%;
                background-image: url(../assets/img/delete.png);
                background-size: 50% 50%;
                background-position: center;
                transform: rotate(180deg);
                background-repeat: no-repeat;
                transition: all 200ms ease;
                cursor: pointer;
                &:hover {
                    background-color: rgb(212, 211, 211);
                }
                &:active {
                   transform: scale(0.975);
                }
            }
            .post-resurse{
                width: 100px;
            }
        }
    }
}
</style>