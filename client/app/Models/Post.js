export class Post {
  constructor(data) {
    this.creatorName = data.creatorName
    this.title = data.title || ''
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
    <div>${this.body}</div>
    <div class="container d-flex justify-content-between">
    <p class="">
      <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <i class="mdi mdi-comment-outline fs-3"></i>
      </button>
      <span class="flex-direction-row">
      <p class="btn"><i class="mdi mdi-pencil-box-outline fs-3"></i></p>
      <p class="btn"><i class="mdi mdi-close-outline fs-3"></i></p>
    </span>
    </p>
    
    </div>
    <div class="collapse" id="collapseExample">
      <div class="card text-center">
        <ul class="list-unstyled" id="comments">
        <!--comments-->
        <li><h6></h6></li>
        </ul>
      </div>
    </div>
  </div>
  <br>
   `
  }
}
