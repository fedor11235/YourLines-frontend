import authService from '../services/authService'
import postsService from '../services/postsService'
import userService from '../services/userService'

export default (ctx, inject) => {
  inject('authService', authService(ctx))
  inject('postsService', postsService(ctx))
  inject('userService', userService(ctx))
}
