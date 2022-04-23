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
    ProxyState.posts.splice(index, 1, post)
    ProxyState.posts = ProxyState.posts
  }

  async sortPostsByDate() {

  }

  async sortPostsByLikes() {

  }

  async addPostComment() {

  }

  async addPost(formData) {
    const newPost = new Post(formData)
    await api.post('/api/posts', newPost)
    // const newPost = new Post(res.data)
    ProxyState.posts = [...ProxyState.posts, newPost]
    bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModalCenter')).hide()
    return newPost

  }

  async editPost() {

  }

  async deletePost() {
  }
}

export const postsService = new PostsService()
