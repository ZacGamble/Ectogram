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
  }

  get Template() { /* html */
    return `
   <div class="container gradient-background text-light shadow" id="post">
   <div>
   <p>${this.score}</p>
   <button type="button" class="mdi mdi-ghost" onclick = "app.postsController.changeScore('${this.id}', 1)"></button>
   <button type="button" class="mdi mdi-ghost-off" onclick = "app.postsController.changeScore('${this.id}', -1)"></button>
   </div>
   <span class="d-flex justify-content-between">
    <h2>${this.title}</h2>
    <div>
      <p class="mx-0 my-0">${this.creatorName}</p> 
      <p class="mx-0 my-0">${this.datePosted}</p>
    </div>
  </span>
    <div>${this.body}</div>
    <div class="container d-flex justify-content-between">
    <p class="">
      <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this.id}" aria-expanded="false" aria-controls="collapseExample">
      <i class="mdi mdi-comment-outline fs-3" title="show comments"></i>
      </button>
      <span class="flex-direction-row">
      <p class="btn"><i class="mdi mdi-pencil-box-outline fs-3" title="edit post"></i></p>
      <p class="btn"><i class="mdi mdi-close-outline fs-3" title='remove post'></i></p>
    </span>
    </p>
    
    </div>
    <div class="collapse" id="collapse-${this.id}">
      <div class="card text-center">
        <p onclick="app.commentsController.addComment('${this.id}')" class="btn"><i class="mdi mdi-pen fs-3" title="add comment"></i></p>
        <ul class="list-unstyled" id="comments">
        ${this.Comments}
       
        </ul>
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
