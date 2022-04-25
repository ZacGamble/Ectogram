import { commentsService } from '../Services/CommentService.js'
import { ProxyState } from '../AppState.js'

export class CommentsController {
  constructor() {
    ProxyState.on('posts', this.getAllComments)
  }

  async getAllComments() {
    try {
      await commentsService.getAllComments()
    } catch (error) {
      console.log("Couldn't get comments")
    }
  }

  async addComment(postId) {
    try {
      window.event.preventDefault()
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        postId: postId,
        body: formElem.commentContent.value
      }
      formElem.reset()
      await commentsService.addComment(formData)
    } catch (error) {
      console.error(error)
    }
  }
}
