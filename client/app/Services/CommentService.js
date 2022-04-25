import { ProxyState } from '../AppState.js'
import { Comment } from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getAllComments() {
    const res = await api.get('/api/comments')
    ProxyState.comments = res.data.map(p => new Comment(p))
  }

  async addComment(formData) {
    formData.creatorId = ProxyState.account.id
    formData.name = ProxyState.account.name
    const newComment = new Comment(formData)
    await api.post('/api/comments', newComment)
    await this.getAllComments()
  }
}
export const commentsService = new CommentsService()
