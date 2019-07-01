// Vehicle Repository

import Repository from './repository'

const resource = '/vehicles'
export default {
  get() {
    return Repository.get(`${resource}`)
  },
  getType(vehicleType) {
    if (vehicleType) {
      if (vehicleType === 'family') {
        return Repository.get(`${resource}?type=1&_limit=5`)
      } else if (vehicleType === 'sport') {
        return Repository.get(`${resource}?type=2&_limit=5`)
      }
    } else {
      return Repository.get(`${resource}?_limit=5`)
    }
  }
}
