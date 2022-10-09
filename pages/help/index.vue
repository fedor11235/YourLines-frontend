<template lang="pug">
.help
    .help-header
        .help-logo-title Questions and answers
    .help-scroll
        .help-search-title Hi how can we help? 
        input(placeholder="Search").help-search
    .help-body
        .help-dropdown
            .dropdown-content
            a
            a
            a
        .help-info
            .help-title Looking for help?
            .help-underline
            .horizontal-divider
            .help-text Explore our Help Center and Community Guidelines below.
            .horizontal-divider

            .help-title Main questions
            .help-underline
            .horizontal-divider
            .help-text General questions and requests among the most frequently asked
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .help-bottom Ask a Question
            .horizontal-divider

            .help-title Questions from fans
            .help-underline
            .horizontal-divider
            .help-text Learn how to become a real fan
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .help-bottom Ask a Question
            .horizontal-divider

            .help-title Author's questions            
            .help-underline
            .horizontal-divider
            .help-text Everything you need to know so you can use the YourLines platform as a professional model
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .help-bottom Ask a Question
            .horizontal-divider

    footer-page
</template>

<script>
export default {
    mounted() {
        document.body.classList.add('scroll')
    },
    unmounted() {
        document.body.classList.remove('scroll')
    }
}
</script>

<style lang="scss" scoped>
.help {
    .help-header {
        position: sticky;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #ee82ee;
        padding: 0 64px;
        height: 56px;
        z-index: 99;
        top: 0;
        .help-logo-title {
            display: flex;
            align-content: center;
            align-items: center;
            max-width: 960px;
            width: 100%;
            font-weight: 700;
            font-size: 20px;
            color: #fefefe;
        }
    }
    .help-scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #ee82ee;
        height: 190px;
        padding-top: 35px;
        padding-bottom: 25px;
        padding: 35px 64px;
        .help-search-title {
            display: flex;
            flex-direction: column;
            align-content: center;
            max-width: 960px;
            width: 100%;
            font-weight: 700;
            font-size: 36px;
            color: #fefefe;
        }

        .help-search {
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            max-width: 960px;
            width: 100%;
            background-color: transparent;
            border: none;
            padding: 0 32px 0 5px;
            font-size: 19px;
            color: #fefefe;
            height: 50px;
            transition: opacity .1s;
            border-bottom: 4px solid #fefefe;
            &::placeholder {
                outline-offset: -2px;
                color: #fefefe;
                font-weight: 500;
                text-overflow: ellipsis;
            }
        }
    }
    .help-body {
        height: 100%;
        padding: 64px;
        .help-dropdown {
            height: 100%;
            background-color: #fdfdfd;
        }
        .help-info {
            padding-top: 32px;
            padding: 16px;
            .help-title {
                font-size: 32px;
                font-weight: 700;
            }
            .help-underline {
                margin-top: 21px;
                width: 64px;
                height: 4px;
                background: #ee82ee;
                content: "";
                opacity: .5;
                border-radius: 2px;
            }
            .help-bottom {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: auto;
                background-color: #ebaaeb;
                border-radius: 1000px;
                width: 180px;
                height: 48px;
                cursor: pointer;
                font-size: 18px;
                color: #fdfdfd;
                transition: all 200ms ease;
                &:hover {
                    background-color: #ee82ee;
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