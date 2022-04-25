import { ProxyState } from '../AppState.js'

export class Post {
  constructor(data) {
    this.creatorName = data.creatorName || ProxyState.account.name
    this.title = data.title || ''
    this.body = data.body || ''
    this.score = data.score || 0
    this.datePosted = data.datePosted
    this.creatorId = data.creatorId || ProxyState.account.id
    this.id = data.id || ''
    this.image = data.image || ''
  }

  get Template() { /* html */
    return `
    <div class="d-flex" id="post">
      <div class="d-flex align-items-start me-1 mt-3 vote-buttons">
        <div class="d-flex align-items-center text-light">
          <p class="me-2 p-0">${this.score}</p>
          <div class="d-flex flex-column">
            <i type="button" class="mdi mdi-ghost" onclick="app.postsController.changeScore('${this.id}', 1)"></i>
            <i type="button" class="mdi mdi-ghost-off" onclick="app.postsController.changeScore('${this.id}', -1)"></i>
          </div>
        </div>
      </div>
      <div class="gradient-background text-light shadow p-2">
        <div class="d-flex justify-content-between align-items-center">
          <h2>${this.title}</h2>
          <p class="mx-0 my-0">${this.creatorName}</p>
          <p class="mx-0 my-0">${this.datePosted}</p>
          <p class="selectable"><i class="mdi mdi-close-outline fs-3 p-0 m-0" title='delete post' onclick="app.postsController.deletePost('${this.id}')"></i></p>
        </div>
        <div class="content-box text-center">
          <img src="${this.image}" alt="" class="img-fluid">
          <h5>${this.body}</h5>
        </div>
        <div class="">
          <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this.id}"
            aria-expanded="false" aria-controls="collapseExample">
          <i class="mdi mdi-comment-outline fs-3" title="show comments"></i>
          </button>
          <div class="collapse" id="collapse-${this.id}">
            <div class="container bg-light">
              <div>
                <form onsubmit="app.commentsController.addComment('${this.id}')">
                  <div class="mb-3">
                  <p class="btn"><i class="mdi mdi-pen fs-5" title="Etchings"></i>Etchings</p>
                  <label for="commentContent" class="form-label"></label>
                  <input type="text" class="form-control" name="commentContent" id="" aria-describedby="helpId" placeholder="add a new comment">
                  <small id="helpId" class="form-text text-muted"></small>
                  </div>
                </form>
                <div>
                <ul class="list-unstyled" id="comments">
                  ${this.Comments}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <br>
    </div>
      `
  }

  get Comments() {
    let template = ''
    const comments = ProxyState.comments.filter(c => c.postId === this.id)
    // eslint-disable-next-line no-return-assign
    comments.forEach(c => {
      console.log(c)
      template += c.Template
    })
    return template
  }

  get commentForm() {
    return `
    <form onsubmit="app.commentsController.addComment(${this.id})">
      <div class="mb-3">
        <label for="commentContent" class="form-label"></label>
        <input type="text" class="form-control" name="commentContent" id="" aria-describedby="helpId" placeholder="add a new comment">
        <small id="helpId" class="form-text text-muted"></small>
      </div>
    </form>`
  }
}
