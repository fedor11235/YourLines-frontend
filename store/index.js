export const state = () => ({
  socketNotifications: null,
  user: {
    id: '',
    headerImage: '',
    avatar: '',
    email: '',
    nickname: '',
    description: '',
    link: '',
    wishList: '',
    location: '',
    websiteURL: '',
    idCards: false,
    paymentHistory: [],
    notifications: [],
    money: 0,
    approved: false
  },
  userEdit: {
    id: '',
    headerImage: '',
    avatar: '',
    email: '',
    nickname: '',
    description: '',
    link: '',
    wishList: '',
    location: '',
    websiteURL: '',
    idCards: false,
    paymentHistory: [],
    notifications: [],
    money: 0,
    approved: false
  },
  userTransition: {
    id: '',
    headerImage: '',
    avatar: '',
    email: '',
    nickname: '',
    description: '',
    link: '',
    wishList: '',
    location: '',
    websiteURL: '',
    idCards: false,
    paymentHistory: [],
    money: 0,
    approved: false
  },
  userTransitionId: '',
  token: '',
  language: '',
  posts: []
})

export const getters = {
    userAvatar: state =>  {
        if (typeof state.user.avatar === 'object' && state.user.avatar !== null) {
            return Buffer.from(state.user.avatar, "base64")
        }
        return state.user.avatar
    },
    userHeaderImage: state =>  {
        if (typeof state.user.headerImage === 'object' && state.user.avatar !== null) {
            return Buffer.from(state.user.headerImage, "base64")
        }
        return state.user.headerImage
    }
}

export const mutations = {
  // сохраняем сокет для прослушивания уведомлений
  SET_SOCKET_NOTIFICATIONS(state, socket) {
    state.socketNotifications = socket
  },

  // меняем язык
  CHANGE_LANGUAGE(state, language) {
    state.language = language
  },

  // сохраняем токен
  ADD_TOKEN(state, token) {
    state.token = token
  },

  // ??? операции с промежуточными данными пользователя
  USER_TRANSITION_SAVE(state, userId) {
    state.userTransitionId = userId
    // for (const property in user) {
    //     state.user[property] = user[property]
    // }
  },

  // операции с данными пользователя
  USER_SAVE_EMAIL(state, email) {
    state.user.email = email
  },
  USER_SAVE_NICKNAME(state, nickname) {
    state.user.nickname = nickname
  },
  USER_SAVE_DESCRIPTION(state, description) {
    state.user.description = description
  },
  USER_SAVE_LINK(state, link) {
    state.user.link = link
  },
  USER_SAVE_DATA(state, user) {
    for (const property in user) {
      state.user[property] = user[property]
    }
  },
  USER_DELETE_DATA(state) {
    state.user.forEach(property => property='')
  },

  // операции с данными постов
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
  // ??? не стоит дублировать код операции с данными пользователя
  userSaveData({ commit }, user) {
    commit('USER_SAVE_DATA', user)
  },
  userDeleteData({ commit }) {
    commit('USER_DELETE_DATA')
  },

  // ??? не стоит дублировать код операции с данными постов
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
 