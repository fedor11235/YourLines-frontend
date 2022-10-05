<template lang="pug">
.user-profile
    .profile-header
        .profile-feed
            .profile-avatar
        .profile-info
            .profile-nickname {{nickname}}
            .profile-link {{link}}
            .profile-item {{description}}
            .profile-more(v-if="crowded") show more information
    .profile-posts
        .profile-tabs
            .profile-tab(:class="{'profile-active': activeTab==='posts'}" @click="activeTab='posts'") Posts
            .profile-tab(:class="{'profile-active': activeTab==='media'}" @click="activeTab='media'") Media
        .profile-body
            .profile-item(v-for="(post, index) in posts" :key="index")
                input.profile-upload-file(type="file" @change="handlerUploadImage(post._id)" :id="`fileInput-${post._id}`" accept="image/*")
                .profile-redaction
                    .profile-preview
                    .profile-specification
                        .profile-preview-nickname {{nickname}}
                        .profile-preview-link {{link}}
                    .profile-edit(v-if="!post.modeEdit" @click="post.modeEdit=true")
                    .profile-save(v-if="post.modeEdit" @click="post.modeEdit=false")
                    .profile-delete
                .profile-banner-header
                    .profile-banner(v-if="!post.modeEdit") {{post.header}}
                    input.profile-input-banner(v-if="post.modeEdit" v-model="post.header")
                    .profile-delete-description(v-if="post.modeEdit && post.header" @click="post.header=''")
                    .profile-upload(v-if="post.modeEdit && !post.image" @click="handlerOpenInput(post._id)")
                .profile-picture(v-if="post.image")
                    img.profile-img( :src="post.image")
                    .profile-delete-img(v-if="post.modeEdit" @click="handlerDeleteImage(post._id)")
</template>
<script>
import { mapState } from 'vuex'
export default {

  data() {
    return {
        crowded: false,
        activeTab: 'posts',
        modeEdit: false,
        posts: [],
        changedPosts: []
    }
  },
  async mounted() {
    const respons = await this.$postsService.postsGetAll()
    this.posts = respons.posts.map(post => {
        post.modeEdit = false
        return post
    })
    console.log(this.posts)
  },
  computed: {
    ...mapState({
        description: state => state.user.description,
        nickname: state => state.user.nickname,
        link: state => state.user.link
    })
  },
  methods: {
    handlerUploadImage(id) {
        const fileInput = document.getElementById(`fileInput-${id}`)
        const reader = new FileReader()
        reader.readAsDataURL(fileInput.files[0])
        reader.onload = () => {
            const post = this.posts.find(post => post._id === id)
            post.image = reader.result
        };
    },
    handlerOpenInput(id) {
        const fileInput = document.getElementById(`fileInput-${id}`)
        fileInput.click()
    },
    handlerDeleteImage(id) {
        const post = this.posts.find(post => post._id === id)
        post.image = null
    }
  }
}
</script>
<style lang="scss" scoped>
.user-profile {
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .profile-header {
        display: flex;
        flex-direction: column;
        height: 460px;
        .profile-feed {
            position: relative;
            height: 50%;
            background-image: url(../assets/img/test-header.jpeg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            .profile-avatar {
                position: absolute;
                background-color: #fdfdfd;
                border-radius: 50%;
                bottom:-43px;
                left: 16px;
                width: 96px;
                height: 96px;
                background-image: url(../assets/img/avatar-big.png);
                background-size: 90% 90%;
                background-repeat: no-repeat;
                background-position: center;
                z-index: 2;
            }
        }
        .profile-info {
            position: relative;
            background-color: #fdfdfd;
            height: 50%;
            padding: 16px;
            padding-top: 48px;
            .profile-nickname {
                font-size: 21px;
                line-height: 24px;
                font-weight: 500;
            }
            .profile-link {

            }
            .profile-description {

            }
            .profile-more {
                position: absolute;
                bottom: 16px;
                cursor: pointer;
                color: #8a96a3;
                &:hover {
                    color: rgba(0, 0, 0, 0.9);
                }
            }
        }

    }
    .profile-posts {
        margin-top: 8px;
        // overflow-y: scroll;
        height: 100%;
        background-image: url(https://static.onlyfans.com/theme/onlyfans/spa/img/empty-feed.svg);
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: top;
        .profile-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 56px;
            background-color: #fdfdfd;
            padding-bottom: 8px;
            .profile-tab {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                font-size: 21px;
                line-height: 24px;
                color: #8a96a3;
                border-bottom: 2px solid #fdfdfd;
                cursor: pointer;
                &:hover {
                    background-color: #ebebeb;
                    border-bottom: 2px solid #ebebeb;
                }
                &.profile-active {
                    color: #1A1A1A;
                    border-bottom: 2px solid #1A1A1A;
                }
            }
        }
        .profile-body {
            .profile-upload-file {
                display: none;
                visibility: hidden;
                width: 0;
                height: 0;
            }
            .profile-item {
                background-color: #fdfdfd;
                margin-bottom: 4px;
                .profile-redaction {
                    position: relative;
                    height: 60px;
                    .profile-preview {
                        position: absolute;
                        top: 6px;
                        left: 16px;
                        height: 48px;
                        width: 48px;
                        border-radius: 50%;
                        background-image: url(../assets/img/avatar.png);
                        background-size: 50% 50%;
                        background-color: #f2f2f2;
                        background-repeat: no-repeat;
                        background-position: center;
                        z-index: 2;
                    }

                    .profile-specification {
                        position: absolute;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        height: 100%;
                        left: 82px;
                        .profile-preview-nickname {
                            font-size: 16px;
                        }
                        .profile-preview-link {
                            font-size: 14px;
                            color: #8a96a3;
                        }
                    }
                    .profile-edit {
                        position: absolute;
                        top: 12px;
                        right: 58px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/edit.png);
                        background-size: 50% 50%;
                        background-color: #a0b9f1;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        &:hover {
                            background-color: #7a92ef;
                        }
                    }
                    .profile-save {
                        position: absolute;
                        top: 12px;
                        right: 58px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/save.png);
                        background-size: 50% 50%;
                        background-color: #a0f1ab;
                        background-repeat: no-repeat;
                        background-position: center;
                        transition: all 200ms ease;
                        cursor: pointer;
                        &:hover {
                            background-color: #7aef9d;
                        }
                        &:active {
                            transform: scale(0.975);
                        }
                    }
                    .profile-delete {
                        position: absolute;
                        top: 12px;
                        right: 16px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/delete.png);
                        background-size: 50% 50%;
                        background-color: #eb8c8c;
                        background-repeat: no-repeat;
                        background-position: center;
                        transition: all 200ms ease;
                        cursor: pointer;
                        &:hover {
                            background-color: #e74848;
                        }
                        &:active {
                            transform: scale(0.975);
                        }
                    }
                }
                .profile-banner-header {
                    position: relative;
                    .profile-banner {
                        padding: 16px
                    }
                    .profile-input-banner {
                        font-family: 'Inter', 'Helvetica Neue', 'Segoe UI', 'Fira Sans', Roboto, Oxygen, Ubuntu, 'Droid Sans', 'Arial', sans-serif !important;
                        padding: 16px;
                        font-size: 16px;
                        line-height: 24px;
                        border: 0;
                        color: #7a92ef;
                    }
                    .profile-delete-description {
                        position: absolute;
                        top: 10px;
                        right: 16px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/delete.png);
                        background-size: 50% 50%;
                        background-color: #f2f2f2;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        transition: all 200ms ease;
                        &:hover {
                            background-color: #ebebeb;;
                        }
                        &:active {
                            transform: scale(0.975);
                        }
                    }

                    .profile-upload {
                        position: absolute;
                        top: 10px;
                        right: 56px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/add-file.png);
                        background-size: 50% 50%;
                        background-color: #f2f2f2;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        transition: all 200ms ease;
                        &:hover {
                            background-color: #ebebeb;;
                        }
                        &:active {
                            transform: scale(0.975);
                        }  
                    }
                }
                .profile-picture {
                    position: relative;
                    width: 100%;
                    .profile-img {
                        width: 100%;
                    }
                    .profile-delete-img {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                        background-image: url(../assets/img/delete.png);
                        background-size: 50% 50%;
                        background-color: #f2f2f2;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                        transition: all 200ms ease;
                        &:hover {
                            background-color: #ebebeb;;
                        }
                        &:active {
                            transform: scale(0.975);
                        }
                    }
                }
            }
        }
    }
}
</style>