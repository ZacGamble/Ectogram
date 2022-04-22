import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _drawPosts() {
  let template = ''
  const posts = ProxyState.posts
  // eslint-disable-next-line no-return-assign
  posts.forEach(p => template += p.Template)

  document.getElementById('posts-landing').innerHTML = template
}

export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    this.getAllPosts()
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.error(error)
    }
  }

  async sortPostsLikes() {

  }

  async sortPostsDate() {

  }

  async addComments() {

  }

  async addPost() {

  }

  async editPost() {

  }

  async deletePost() {

  }
}
