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
    const editedPost = new Post(post)
    await api.put('api/posts/' + postId, editedPost)
    ProxyState.posts.splice(index, 1, post)
    // eslint-disable-next-line no-self-assign
    ProxyState.posts = ProxyState.posts
  }

  async sortPostsByDate() {

  }

  async sortPostsByLikes() {

  }

  async addPost(formData) {
    const newPost = new Post(formData)
    await api.post('/api/posts', newPost)
    await this.getAllPosts()
    // @ts-ignore
    // eslint-disable-next-line no-undef
    bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModalCenter')).hide()
  }

  async editPost() {
    // TODO

  }

  async deletePost(postId) {
    const postToDelete = ProxyState.posts.find(p => postId === p.id)
    if (!postToDelete) {
      throw new Error("Couldn't find that post")
    }
    // i would delete comments here but we don't have to. in the real world you would
    await api.delete('/api/posts/' + postId)
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== postId)
  }
}

export const postsService = new PostsService()
