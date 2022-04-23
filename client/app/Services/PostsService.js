import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getAllPosts() {
    const res = await api.get('/api/posts')
    ProxyState.posts = res.data.map(p => new Post(p))
  }

  async changeScore(postId, value) {
    const post = ProxyState.posts.find(p => p.id === postId)
    const index = ProxyState.posts.indexOf(post)
    post.score += value
    const newPost = new Post(post)
    await api.put('api/posts/' + postId, newPost)
    ProxyState.posts = ProxyState.posts.splice(index, 1)
    return newPost
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
