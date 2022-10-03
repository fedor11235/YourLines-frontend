import ayth from '../services/aythService'

export default (ctx, inject) => {
  inject('aythService', ayth(ctx))
}
