import authService from '../services/authService'
import postsService from '../services/postsService'
import editUserService from '../services/editUserService'

export default (ctx, inject) => {
  inject('authService', authService(ctx))
  inject('postsService', postsService(ctx))
  inject('editUserService', editUserService(ctx))
}
