import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getAllPosts() {
    const res = await api.get('/api/posts')
    console.log(res.data)
    ProxyState.posts = res.data.map(p => new Post(p))
    console.log(ProxyState.posts, 'proxystate')
  }

  async sortPostsByDate() {

  }

  async sortPostsByLikes() {

  }

  async addPostComment() {

  }

  async addPost() {

  }

  async editPost() {

  }

  async deletePost() {
  }
}

export const postsService = new PostsService()