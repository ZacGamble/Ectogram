import { commentsService } from '../Services/CommentService.js'
import { ProxyState } from '../AppState.js'

function _drawComments() {
  const comments = ProxyState.comments
  let template = ''
  comments.forEach(c => { template += c.Template })
  document.getElementById(`${}`).innerHTML = template
}
export class CommentsController {
  constructor() {
    ProxyState.on('posts', this.getAllComments)
  }

  async getAllComments() {
    try {
      const res = await commentsService.getAllComments()
      console.log('res in comments controller', res)
      return res.data
    } catch (error) {
      console.log("Couldn't get comments")
    }
  }

  async drawComments() {
    _drawComments()
  }
}
