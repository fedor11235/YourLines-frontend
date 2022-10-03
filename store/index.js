export const state = () => ({
    user: {
        email: '',
        nickname: ''
    },
    posts: [],
})

export const getters = {
}

export const mutations = {
    // Operations with users
    USER_SAVE_DATA(state, user) {
        for (const property in user) {
            state.user[property] = user[property]
        }
    },
    USER_DELETE_DATA(state) {
        state.user.forEach(property => property='')
    },

    // Operations with posts
    POSTS_SAVE_ALL(state, posts) {
        state.posts = posts
    },
    POSTS_ADD_ONE(state, post) {
        state.posts.push(post)
    },
    POSTS_EDIT_ONE(state, payload) {
        const { post, id } = payload
        let itemToUpdate = state.bgRemovalItems.find(
            item => item.id === id
          )
        for (const property in post) {
            itemToUpdate[property] = post[property]
        }
    },
    POSTS_DELETE_ONE(state, id) {
        state.posts = state.posts.filter(post => post!=id)
    }
}

export const actions = {
    // Operations with users
    userSaveData({ commit }, user) {
        commit('USER_SAVE_DATA', user)
    },
    userDeleteData({ commit }) {
        commit('USER_DELETE_DATA')
    },

    // Operations with posts
    postSaveAll({ commit }, posts) {
        commit('POSTS_SAVE_ALL', posts)
    },
    postAddOne({ commit }, post) {
        commit('POSTS_ADD_ONE', post)
    },
    postsEditOne({ commit }, payload) {
        commit('POSTS_EDIT_ONE', payload)
    },
    postsDeleteOne({ commit }, id) {
        commit('POSTS_DELETE_ONE', id)
    },
}
 