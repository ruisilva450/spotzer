// Question Repository

import Repository from './repository'

const resource = '/questions'
export default {
  get() {
    return Repository.get(`${resource}`)
  }
}
