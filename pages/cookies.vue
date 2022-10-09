<template lang="pug">
.cookies
    .cookies-header
        .cookies-logo-title Questions and answers
    .cookies-body
        .cookies-dropdown
            .dropdown-content
            a
            a
            a
        .cookies-info
            .cookies-title Looking for cookies?
            .cookies-underline
            .horizontal-divider
            .cookies-text Explore our cookies Center and Community Guidelines below.
            .horizontal-divider

            .cookies-title Main questions
            .cookies-underline
            .horizontal-divider
            .cookies-text General questions and requests among the most frequently asked
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .cookies-bottom Ask a Question
            .horizontal-divider

            .cookies-title Questions from fans
            .cookies-underline
            .horizontal-divider
            .cookies-text Learn how to become a real fan
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .cookies-bottom Ask a Question
            .horizontal-divider

            .cookies-title Author's questions            
            .cookies-underline
            .horizontal-divider
            .cookies-text Everything you need to know so you can use the YourLines platform as a professional model
            .horizontal-divider
            information There were no questions yet, the community is young, but it is actively being conducted, you can ask directly in the feedback form!
            .horizontal-divider
            .cookies-bottom Ask a Question
            .horizontal-divider

    //- footer-page
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
.cookies {
    .cookies-header {
        position: sticky;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #ee82ee;
        padding: 0 64px;
        height: 56px;
        z-index: 99;
        top: 0;
        .cookies-logo-title {
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
    .cookies-scroll {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #ee82ee;
        height: 190px;
        padding-top: 35px;
        padding-bottom: 25px;
        padding: 35px 64px;
        .cookies-search-title {
            display: flex;
            flex-direction: column;
            align-content: center;
            max-width: 960px;
            width: 100%;
            font-weight: 700;
            font-size: 36px;
            color: #fefefe;
        }

        .cookies-search {
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
    .cookies-body {
        height: 100%;
        padding: 64px;
        .cookies-dropdown {
            height: 100%;
            background-color: #fdfdfd;
        }
        .cookies-info {
            padding-top: 32px;
            padding: 16px;
            .cookies-title {
                font-size: 32px;
                font-weight: 700;
            }
            .cookies-underline {
                margin-top: 21px;
                width: 64px;
                height: 4px;
                background: #ee82ee;
                content: "";
                opacity: .5;
                border-radius: 2px;
            }
            .cookies-bottom {
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