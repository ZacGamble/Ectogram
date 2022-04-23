import { commentsService } from '../Services/CommentService.js'
import { ProxyState } from '../AppState.js'

export class CommentsController {
  constructor() {
    ProxyState.on('posts', this.getAllComments)
  }

  async getAllComments() {
    try {
      const res = await commentsService.getAllComments()
      console.log('res in comments controller', res)
    } catch (error) {
      console.log("Couldn't get comments")
    }
  }

  async addComment(postId) {
    try {
      await commentsService.addComment(postId)
    } catch (error) {
      console.error(error)
    }
  }
}
