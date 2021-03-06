import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class PostsService {
  async getAllPosts() {
    const post = await dbContext.Posts.find({})
    return post
  }

  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId)
    return post
  }

  async createPost(body) {
    const post = await dbContext.Posts.create(body)
    return post
  }

  async editPost(update) {
    const original = await this.getPostById(update.id)
    if (!original) {
      throw new BadRequest("Couldn't find that post")
    }
    // if (userId !== update.creatorId) {
    //   throw new Forbidden("You can't edit that.")
    // }
    original.creatorName = update.creatorName || original.creatorName
    original.title = update.title || original.title
    original.body = update.body || original.body
    original.score = update.score || original.score
    original.creatorId = update.creatorId || original.creatorId

    await original.save()
    return original
  }

  async removePost(reqID) {
    const foundPost = await this.getPostById(reqID)
    if (!foundPost) {
      throw new BadRequest('Post not found')
    }
    // if (foundPost.creatorId.toString() !== userId) {
    // throw new BadRequest("You don't have permission")
    // }
    const post = await dbContext.Posts.findByIdAndDelete(reqID)
    return post
  }
}

export const postsService = new PostsService()
