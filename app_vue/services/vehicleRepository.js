// Vehicle Repository

import Repository from './repository'

const resource = '/vehicles'
export default {
  get() {
    debugger
    return Repository.get(`${resource}`)
  },
  getType(vehicleType) {
    debugger
    return Repository.get(`${resource}?type=${vehicleType}&_limit=5`)
  }
}
