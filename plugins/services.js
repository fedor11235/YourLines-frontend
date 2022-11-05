import authService from '../services/authService'
import postsService from '../services/postsService'
import userService from '../services/userService'
import bookmarksService from '../services/bookmarksService'
import subscribeService from '../services/subscribeService'

export default (ctx, inject) => {
  inject('authService', authService(ctx))
  inject('postsService', postsService(ctx))
  inject('userService', userService(ctx))
  inject('bookmarksService', bookmarksService(ctx))
  inject('subscribeService', subscribeService(ctx))
}
