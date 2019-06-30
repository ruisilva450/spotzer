// Vehicle Repository

import Repository from './repository'

const resource = '/vehicles'
export default {
  get() {
    return Repository.get(`${resource}`)
  },
  getType(vehicleType) {
    return Repository.get(`${resource}/${vehicleType}`)
  }
}
