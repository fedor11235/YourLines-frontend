<template lang="pug">
.settings-edit-language
    header-feed(title="Language editing")
    .edit-language-info
        .edit-language-title Change the language
        .edit-language-radios(v-for="(local, index) in locales" :key="index")
            input.edit-language-radio(type="radio" :value="local.code" v-model="languageActive" placeholder="nickname" :id="`contact-${local.code}`")
            label.edit-language-text(:for="`contact-${local.code}`") {{local.name}}
            .edit-language-delmiter
        .edit-language-delmiter
        .edit-language-position
            .edit-language-button(v-if="languageActive!==languageOldActive" @click="handleSave") Save

</template>
<script>
export default {
    data() {
        return {
            languageActive: '',
            languageOldActive: '',
            locales: []
        }
    },
    mounted() {
        this.locales = this.$i18n.locales.slice()
    },
    methods: {
        handleSave() {
            this.languageOldActive = this.languageActive
            this.$i18n.setLocale(this.languageActive)
        }
    }
}
</script>
<style lang="scss" scoped>
.settings-edit-language {
    max-width: 640px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .edit-language-info {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fdfdfd;
        padding: 16px;
        .edit-language-delmiter {
            height: 16px;
        }
        .edit-language-title {
            font-size: 21px;
            font-weight: 500;
            margin-bottom: 21px;
        }
        .edit-language-radios {
            display: flex;
            margin-bottom: 16px;
            .edit-language-radio {
                width: 21px;
                height: 21px;
                cursor: pointer;
            }
            .edit-language-text {
                margin-left: 16px;
                cursor: pointer;
            }
        }

        .edit-language-position {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            .edit-language-button {
                display: flex;
                align-items: center;
                justify-content: center;
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
}
    </style>