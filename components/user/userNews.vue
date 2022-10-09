<template lang="pug">
.user-news
    .news-input
        .news-icon
        input.news-search(:placeholder="$t('NEWS.HEADER_PLACEHOLDER')")
    .news-suggestions
        .news-title {{$t('NEWS.TITLE')}}
    .news-body
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.user-news {
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    padding: 16px;
    background-color: #fdfdfd;
    .news-input {
        position: relative;
        padding-bottom: 16px;
        background: #fdfdfd;
        .news-search {
            border-radius: 4px;
            border: 1px solid #8a96a3;
            padding: 14px 30px;
            width: 100%;
            height: 24px;
            line-height: 30px;
            caret-color: rgba(0, 0, 0, 0.9);;
            &:focus {
            border-color: rgba(0, 0, 0, 0.9);;
            }
        }
        .news-icon {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 18px;
            height: 18px;
            background-image: url(@/assets/img/search.png);
            background-size: cover;
            background-position: center;
        }
    }
    .news-suggestions {
        background: #fdfdfd;
        .news-title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
            padding: 0 16px 16px 16px;
        }
    }
    .news-body {
        overflow-y: scroll;
        height: 100%;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
}
</style>