import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAllComments)
      .get('/:id', this.getCommentById)
      // Auth0 TODO
      .post('', this.createComment)
      .put('/:id', this.editComment)
      .delete('/:id', this.removeComment)
  }

  async getAllComments(req, res, next) {
    try {
      const comments = await commentsService.getAllComments()
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      const comment = await commentsService.getCommentById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      const newComment = await commentsService.createComment(req.body)
      res.send(newComment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    try {
      req.body.id = req.params.id
      const commentToEdit = await commentsService.editComment(req.body)
      res.send(commentToEdit)
    } catch (error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const commentToRemove = await commentsService.removeComment(req.params.id)
      res.send(commentToRemove)
    } catch (error) {
      next(error)
    }
  }
}
