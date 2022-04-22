export class Post {
  constructor(data) {
    this.creatorName = data.creatorName
    this.title = data.title || 'Title'
    this.body = data.body
    this.score = data.score || 0
    this.datePosted = data.datePosted
    this.creatorId = data.creatorId
  }

  get Template() { /* html */
    return `
   <div class="container" id="post">
   <span class="d-flex justify-content-between">
    <h2>${this.title}</h2>
    <div>
      <p class="mx-0 my-0">${this.creatorName}</p> 
      <p class="mx-0 my-0">${this.datePosted}</p>
    </div>
  </span>
    <img class="img-fluid" src="/assets/img/Beach-Ghost.jpg">
    <p class="">
      <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Comments >
      </button>
    </p>
    <div class="collapse pb-2" id="collapseExample">
      <div class="card text-center">
        <ul class="list-unstyled" id="comments">
        <li><h6>${this.body}</h6></li>
        </ul>
      </div>
    </div>
  </div>
   `
  }
}
