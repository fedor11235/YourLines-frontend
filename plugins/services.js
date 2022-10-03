import aythService from '../services/aythService'
import postsService from '../services/postsService'

export default (ctx, inject) => {
  inject('aythService', aythService(ctx))
  inject('postsService', postsService(ctx))
}
