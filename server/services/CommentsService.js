import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getAllComments() {
    const comment = await dbContext.Comments.find({})
    return comment
  }

  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    return comment
  }

  async createComment(body) {
    console.log('server commentsservice createcomment')
    const comment = await dbContext.Comments.create(body)
    return comment
  }

  async editComment(update) {
    const original = await this.getCommentById(update.id)
    if (!original) {
      throw new BadRequest('Could not find comment')
    }
    original.body = update.body
    await original.save()
    return original
  }

  async removeComment(id) {
    const foundComment = await this.getCommentById(id)
    if (!foundComment) {
      throw new BadRequest('NOPE')
    }
    const comment = await dbContext.Comments.findByIdAndDelete(id)
    return comment
  }
}
export const commentsService = new CommentsService()
