// Repository Factory

import QuestionRepository from './questionRepository'
import VehicleRepository from './vehicleRepository'

const repositories = {
  questions: QuestionRepository,
  vehicles: VehicleRepository
}

export const RepositoryFactory = {
  /* eslint arrow-parens: ["error", "always"] */
  get: (name) => repositories[name]
}
