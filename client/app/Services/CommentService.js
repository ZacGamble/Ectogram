
class CommentsService {
  constructor() {

  }

  async getAllComments() {
    const res = await api.get('/api/comments')
    ProxyState.comments = res.data.map(p => new Comment(p))
  }

  async addComment() {

  }
}
export const commentsService = new CommentsService()
