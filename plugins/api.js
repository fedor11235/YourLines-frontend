import authApi from '../api/authApi'
import postsApi from '../api/postsApi'
import userApi from '../api/userApi'
import bookmarksApi from '../api/bookmarksApi'

export default ({ $axios, app, res, $store }, inject) => {
  inject('authApi', authApi($axios))
  inject('postsApi', postsApi($axios))
  inject('userApi', userApi($axios))
  inject('bookmarksApi', bookmarksApi($axios))

  $axios.onRequest(config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
      app.store.commit('ADD_TOKEN', `Bearer ${token}`)
    } else {
      delete config.headers['Authorization']
      app.store.commit('ADD_TOKEN', '')
    }
  })

  $axios.onError(async error => {
    const status = error.response ? error.response.status : null
    if (status === 401) {
      const token = window.localStorage.getItem('token')
      if(token) {
        await app.$authService.userRefreshToken()
      }
    }
  })
}