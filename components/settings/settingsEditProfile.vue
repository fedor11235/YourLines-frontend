<template lang="pug">
.settings-edit-profile
    input.post-upload(type="file" @change="handlerUploadImageAvatar" ref="fileInputAvatar" accept="image/*")
    input.post-upload(type="file" @change="handlerUploadImageHeader" ref="fileInputHeaderImage" accept="image/*")
    header-feed(:title="$t('SETTINGS.PROFILE_TITLE')")
    .edit-profile-header
        .edit-profile-feed
            img.edit-profile-img-header(v-if="headerImage" :src="headerImage")
            .container-edit
                .edit-profile-header-upload(@click="handlerAddHeaderImage")
                .edit-profile-header-delete(@click="handlerDeleteHeaderImage")
            .edit-profile-avatar
                img.edit-profile-img-avatar(v-if="avatar" :src="avatar")
                .container-edit
                    .edit-profile-avatar-upload(@click="handlerAddAvatar")
                    .edit-profile-avatar-delete(@click="handlerDeleteAvatar")
        .edit-profile-info
            .horizontal-divider
            input-label(:valueProp="nickname" @changeInput="e => nickname = e" :placeholder="$t('SETTINGS.PROFILE_NICKNAME')")
            .horizontal-divider
            input-label(:valueProp="link" @changeInput="e => link = e"  :placeholder="$t('SETTINGS.PROFILE_LINK')")
            .horizontal-divider
            input-label(:valueProp="description" @changeInput="e => description = e" :placeholder="$t('SETTINGS.PROFILE_DESCRIPTION')")
            .horizontal-divider
            input-label(:valueProp="location" @changeInput="e => location = e" :placeholder="$t('SETTINGS.PROFILE_LOCATION')")
            .horizontal-divider
            input-label(:valueProp="websiteURL" @changeInput="e => websiteURL = e" :placeholder="$t('SETTINGS.PROFILE_WEBSITE')")
            .horizontal-divider
            input-label(:valueProp="wishList" @changeInput="e => wishList = e" :placeholder="$t('SETTINGS.PROFILE_WISH_LIST')")
            .horizontal-divider
            .container-button
                .toolbar-post(@click="handlerSave") Save
</template>
<script>
export default {
    data() {
        return {
            changeItem: [],
        }
    },
    computed: {
        headerImage: {
            get() {
                return this.$store.state.user.headerImage
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {headerImage: val})
            }
        },
        avatar: {
            get() {
                return this.$store.state.user.avatar
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {avatar: val})
            }
        },
        description: {
            get() {
                return this.$store.state.user.description
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {description: val})
            }
        },
        nickname: {
            get() {
                return this.$store.state.user.nickname
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {nickname: val})
            }
        },
        link: {
            get() {
                return this.$store.state.user.link
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {link: val})
            }
        },
        wishList: {
            get() {
                return this.$store.state.user.wishList
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {wishList: val})
            }
        },
        location: {
            get() {
                return this.$store.state.user.location
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {location: val})
            }
        },
        websiteURL: {
            get() {
                return this.$store.state.user.websiteURL
            },
            set(val) {
                this.$store.commit('USER_SAVE_DATA', {websiteURL: val})
            }
        },
    },
    methods: {
        handlerAddHeaderImage(){
            this.$refs.fileInputHeaderImage.click()
        },
        handlerUploadImageHeader() {
            const reader = new FileReader()
            reader.readAsDataURL(this.$refs.fileInputHeaderImage.files[0])
            reader.onload = () => {
                this.headerImage = reader.result
            };
        },
        handlerDeleteHeaderImage(){
            this.headerImage = ''
        },
        handlerAddAvatar(){
            this.$refs.fileInputAvatar.click()
        },
        handlerUploadImageAvatar() {
            const reader = new FileReader()
            reader.readAsDataURL(this.$refs.fileInputAvatar.files[0])
            reader.onload = () => {
                this.avatar = reader.result
            };
        },
        handlerDeleteAvatar(){
            this.avatar = ''
        },
        handlerSave(){
        },
    }
}
</script>
<style lang="scss" scoped>
.settings-edit-profile {
    background-color: #fdfdfd;
    max-width: 640px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .post-upload {
        display: none;
        visibility: hidden;
        width: 0;
        height: 0;
    }
    .edit-profile-header {
        display: flex;
        flex-direction: column;
        .edit-profile-feed {
            position: relative;
            height: 230px;
            background-image: url(@/assets/img/test-header.jpeg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            .edit-profile-img-header {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .container-edit {
                position: absolute;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                .edit-profile-header-upload {
                    background-color: #a0b9f1;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                    background-image: url(@/assets/img/upload-avatar.png);
                    background-size: 76% 76%;
                    background-repeat: no-repeat;
                    background-position: center;
                    margin-right: 8px;
                    cursor: pointer;
                    transition: all 200ms ease;
                    &:hover {
                        background-color:#7a92ef;
                    }
                }
                .edit-profile-header-delete {
                    background-color: #eb8c8c;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                    background-image: url(@/assets/img/delete-avatar.png);
                    background-size: 76% 76%;
                    background-repeat: no-repeat;
                    background-position: center;
                    margin-left: 8px;
                    cursor: pointer;
                    transition: all 200ms ease;
                    &:hover {
                        background-color: #e74848;
                    }
                }
            }
            .edit-profile-avatar {
                position: absolute;
                background-color: #fdfdfd;
                border-radius: 50%;
                bottom:-43px;
                left: 16px;
                width: 96px;
                height: 96px;
                background-image: url(@/assets/img/avatar-big.png);
                background-size: 90% 90%;
                background-repeat: no-repeat;
                background-position: center;
                z-index: 2;
                .edit-profile-img-avatar {
                    position: absolute;
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }

                .container-edit {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .edit-profile-avatar-upload {
                        background-color: #a0b9f1;
                        border-radius: 50%;
                        width: 22px;
                        height: 22px;
                        margin-right: 4px;
                        background-image: url(@/assets/img/upload-avatar.png);
                        background-size: 76% 76%;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        transition: all 200ms ease;
                        &:hover {
                            background-color:#7a92ef;
                        }
                    }
                    .edit-profile-avatar-delete {
                        background-color: #eb8c8c;
                        border-radius: 50%;
                        width: 22px;
                        height: 22px;
                        margin-left: 4px;
                        background-image: url(@/assets/img/delete-avatar.png);
                        background-size: 76% 76%;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        transition: all 200ms ease;
                        &:hover {
                            background-color: #e74848;
                        }
                    }
                }
            }
        }
        .edit-profile-info {
            display: flex;
            flex-direction: column;
            background-color: #fdfdfd;
            padding: 16px;
            padding-top: 48px;
            .edit-profile-textarea {
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
            .container-button {
                display: flex;
                justify-content: flex-end;
            }
        }

    }
}
</style>