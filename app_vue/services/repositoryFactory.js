// Repository Factory

import QuestionRepository from './questionRepository'
import VehicleRepository from './vehicleRepository'

const repositories = {
  questions: QuestionRepository,
  vehicles: VehicleRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
