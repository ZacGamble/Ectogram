import { ProxyState } from '../AppState.js'

export class Post {
  constructor(data) {
    this.creatorName = data.creatorName || ProxyState.account.name
    this.title = data.title || ''
    this.body = data.body
    this.score = data.score || 0
    this.datePosted = data.datePosted
    this.creatorId = data.creatorId || ProxyState.account.id
    this.id = data.id || ''
    this.image = data.image || ''
  }

  get Template() { /* html */
    return `
    <div class="container gradient-background text-light shadow" id="post">
    <span class="d-flex justify-content-between p-3">
      <h2>${this.title}</h2>
      <p class="mx-0 my-0">${this.creatorName}</p>
      <p class="mx-0 my-0">${this.datePosted}</p>
      <p class="btn"><i class="mdi mdi-close-outline fs-3 p-0 m-0" title='remove post'></i></p>
    </span>
    <img src="${this.image}" alt="" class="img-fluid">
    <div>${this.body}</div>
    <div class="row d-flex justify-content-end">
      <div class="col-10">
        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this.id}"
          aria-expanded="false" aria-controls="collapseExample">
          <i class="mdi mdi-comment-outline fs-3" title="show comments"></i>
        </button>
        <div class="collapse" id="collapse-${this.id}">
          <div class="container bg-light">
            <p onclick="app.commentsController.addComment('${this.id}')" class="btn"><i class="mdi mdi-pen fs-5"
                title="add comment"></i>Add Etching</p>
            <ul class="list-unstyled" id="comments">
              ${this.Comments}
            </ul>
          </div>
        </div>
      </div>
      <div class="col-2">
        <span class="">
          <p class="m-0 p-0">${this.score}</p>
          <i type="button" class="mdi mdi-ghost fs-3 " onclick="app.postsController.changeScore('${this.id}', 1)"></i>
          <i type="button" class="mdi mdi-ghost-off fs-3" onclick="app.postsController.changeScore('${this.id}', -1)"></i>
        </span>
      </div>
    </div>
  </div>
  <br>
   `
  }

  get Comments() {
    let template = ''
    const comments = ProxyState.comments.filter(c => c.postId === this.id)
    console.log(comments)
    // eslint-disable-next-line no-return-assign
    comments.forEach(c => {
      console.log(c)
      template += c.Template
    })
    return template
  }
}
