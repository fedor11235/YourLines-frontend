import aythApi from '../api/aythApi'
import postsApi from '../api/postsApi'

export default ({ $axios, app, res }, inject) => {
  inject('aythApi', aythApi($axios))
  inject('postsApi', postsApi($axios))
}