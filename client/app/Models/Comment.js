
export class Comment {
  constructor(data) {
    this.body = data.body
    this.postId = data.postId
    this.creatorId = data.creatorId
  }

  get Template() {
    return `
   <li><h6>${this.body}</h6></li>
   `
  }
}
