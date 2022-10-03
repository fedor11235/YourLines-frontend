import aythApi from '../api/aythApi'

export default ({ $axios, app, res }, inject) => {
  inject('aythApi', aythApi($axios))
}