import authApi from '../api/authApi'
import postsApi from '../api/postsApi'

export default ({ $axios, app, res }, inject) => {
  inject('authApi', authApi($axios))
  inject('postsApi', postsApi($axios))
}