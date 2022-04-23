import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { postsService } from '../Services/PostsService.js'
import { CommentsController } from './CommentsController.js'

function _drawPosts() {
  let template = ''
  const posts = ProxyState.posts
  // eslint-disable-next-line no-return-assign
  posts.forEach(p => template += p.Template)

  document.getElementById('posts-landing').innerHTML = template
}

export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    this.getAllPosts()
  }

  async changeScore(postId, value) {
    try {
      const newPost = await postsService.changeScore(postId, value)
      console.log(newPost)
    } catch (error) {
      console.error(error)
    }
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.error(error)
    }
  }

  async sortPostsLikes() {

  }

  async sortPostsDate() {

  }

  async addComments() {

  }

  async addPost() {
    try {
      window.event.preventDefault()
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        title: formElem.title.value,
        body: formElem.body.value,
        image: formElem.image.value
      }
      formElem.reset()
      await postsService.addPost(formData)
    } catch (error) {
      console.log('Error')
    }
  }

  async editPost() {

  }

  async deletePost() {

  }
}
