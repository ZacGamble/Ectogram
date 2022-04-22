import { ProxyState } from '../AppState.js'

function _drawPosts() {
  let template = ''
  const posts = ProxyState.posts
  posts.forEach(p => template += p.Template)
  ProxyState.posts = ProxyState.posts

  document.getElementById('posts-landing').innerHTML = template
}

export class PostsController {
  constructor() {
    // ProxyState.on("posts", _drawPosts)
    _drawPosts()
  }
}
