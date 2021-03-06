import { dev } from './env.js'
import { Post } from './Models/Post.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

// new Post({
//   creatorName: 'john lennon',
//   title: 'poo0p',
//   body: 'this is a post wow!~',
//   datePosted: '10/12',
//   creatorId: '12131'
// })
class AppState extends EventEmitter {
  user = {}
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []
  posts = []
  comments = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
