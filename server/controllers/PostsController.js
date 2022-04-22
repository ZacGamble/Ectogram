import { postsService } from '../services/PostsService'
import BaseController from '../utils/BaseController'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .get('/:id', this.getPostById)
      // Auth0 TODO
      .post('', this.createPost)
      .put('/:id', this.editPost)
      .delete('/:id', this.removePost)
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostById(req.params.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      const newPost = await postsService.createPost(req.body)
      res.send(newPost)
    } catch (error) {
      next(error)
    }
  }

  async editPost(req, res, next) {
    try {
      req.body.id = req.params.id
      const postToEdit = await postsService.editPost(req.body)
      res.send(postToEdit)
    } catch (error) {
      next(error)
    }
  }

  async removePost(req, res, next) {
    try {
      const postToRemove = await postsService.removePost(req.params.id)
      res.send(postToRemove)
    } catch (error) {
      next(error)
    }
  }
}
