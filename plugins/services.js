import authService from '../services/authService'
import postsService from '../services/postsService'

export default (ctx, inject) => {
  inject('authService', authService(ctx))
  inject('postsService', postsService(ctx))
}
