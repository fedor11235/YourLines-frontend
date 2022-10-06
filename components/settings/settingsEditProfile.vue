<template lang="pug">
.settings-edit-profile
    header-feed(title="Profile editing")
    .edit-profile-header
        .edit-profile-feed
            .edit-profile-header-upload
            .edit-profile-header-delete
            .edit-profile-avatar
                .edit-profile-avatar-upload
                .edit-profile-avatar-delete
        .edit-profile-info
            input.edit-profile-input(v-model="nicknameSave" placeholder="nickname")
            input.edit-profile-input(v-model="linkSave" placeholder="link")
            input.edit-profile-input(v-model="descriptionSave" placeholder="description")
            input.edit-profile-input(v-model="locationSave" placeholder="location")
            input.edit-profile-input(v-model="websiteURLSave" placeholder="Website URL")
            input.edit-profile-input(v-model="wishListSave" placeholder="A wish list")
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            descriptionSave: '',
            nicknameSave: '',
            linkSave: '',
            locationSave: '',
            websiteURLSave: '',
            wishListSave: ''
        }
    },
    computed: {
        ...mapState({
            description: state => state.user.description,
            nickname: state => state.user.nickname,
            link: state => state.user.link
        }),
    },
    bedoreCreated() {
        this.descriptionSave = this.description
        this.nicknameSave = this.nickname
        this.linkSave = this.link
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
    .edit-profile-header {
        display: flex;
        flex-direction: column;
        .edit-profile-feed {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 230px;
            background-image: url(@/assets/img/test-header.jpeg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
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
            .edit-profile-avatar {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
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
        .edit-profile-info {
            display: flex;
            flex-direction: column;
            background-color: #fdfdfd;
            padding: 16px;
            padding-top: 48px;
            .edit-profile-input {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 21px;
                padding: 10px 16px;
                border: 1px solid #8a96a3;
                border-radius: 5px;
                height: 40px;
            }
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
        }

    }
}
</style>