import { ProxyState } from '../AppState.js'
import { Comment } from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getAllComments() {
    const res = await api.get('/api/comments')
    ProxyState.comments = res.data.map(p => new Comment(p))
    console.log('hi from comments service', res.data)
  }

  async addComment(postId) {
    const res = await api.post(`/api/${this.postId}/comments`)
  }
}
export const commentsService = new CommentsService()
