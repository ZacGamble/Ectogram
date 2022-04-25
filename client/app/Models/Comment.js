
export class Comment {
  constructor(data) {
    this.body = data.body
    this.postId = data.postId
    this.creatorId = data.creatorId
  }

  get Template() { // TODO username functionality -> accounts
    return `
   <li class="d-flex text-dark fs-6 me-2"><p>Shmee-User</p><p>${this.body}</p></li>
   `
  }
}
