import authService from '../services/authService'
import postsService from '../services/postsService'
import userService from '../services/userService'
import bookmarksService from '../services/bookmarksService'
import subscribeService from '../services/subscribeService'
import messagesService from '../services/messagesService'
import commentService from '../services/commentService'
import notificationsService from '../services/notificationsService'

export default (ctx, inject) => {
  inject('authService', authService(ctx))
  inject('postsService', postsService(ctx))
  inject('userService', userService(ctx))
  inject('bookmarksService', bookmarksService(ctx))
  inject('subscribeService', subscribeService(ctx))
  inject('messagesService', messagesService(ctx))
  inject('commentService', commentService(ctx))
  inject('notificationsService', notificationsService(ctx))
}
