import { RepositoryFactory } from './../services/repositoryFactory'
const QuestionsRepository = RepositoryFactory.get('questions')
const VehiclesRepository = RepositoryFactory.get('vehicles')

export const state = () => ({
  questions: [],
  vehicles: [],
  countSport: 0,
  countFamily: 0,
  allAnswered: false,
  submitted: false
})

export const actions = {
  getQuestions({ commit }) {
    /* eslint arrow-parens: ["error", "always"] */
    QuestionsRepository.get().then((questions) =>
      commit('updateQuestions', questions.data)
    )
  },
  getVehicles({ commit }, type) {
    /* eslint arrow-parens: ["error", "always"] */
    VehiclesRepository.getType(type).then((vehicles) =>
      commit('updateVehicles', vehicles.data)
    )
  }
}

export const mutations = {
  updateQuestions(state, payload) {
    state.questions = payload
  },
  updateVehicles(state, payload) {
    state.vehicles = payload
  },
  answer(state, { question, value }) {
    const foundQuestion = state.questions.find((q) => {
      return q.id === question.id
    })

    foundQuestion.value = value

    let countFamily = 0
    let countSport = 0
    let allAnswered = true

    for (const q in state.questions) {
      if (state.questions.hasOwnProperty(q)) {
        const element = state.questions[q]
        if (element.value) {
          switch (element.type) {
            case 1:
              if (element.countFamily) {
                if (
                  element.countFamily.min &&
                  element.countFamily.min <= element.value
                ) {
                  countFamily += element.countFamily.value
                }
                if (
                  element.countFamily.max &&
                  element.countFamily.max >= element.value
                ) {
                  countFamily += element.countFamily.value
                }
              }
              if (element.countSport) {
                if (
                  element.countSport.min &&
                  element.countSport.min <= element.value
                ) {
                  countSport += element.countSport.value
                }
                if (
                  element.countSport.max &&
                  element.countSport.max >= element.value
                ) {
                  countSport += element.countSport.value
                }
              }
              break
            case 2:
              const foundOption = element.options.find((o) => {
                return o.value === element.value
              })

              countFamily += foundOption.countFamily
              countSport += foundOption.countSport
              break
            default:
              break
          }
        } else {
          allAnswered = false
        }
      }
    }

    state.countFamily = countFamily
    state.countSport = countSport
    state.allAnswered = allAnswered
  },
  submit(state) {
    if (state.allAnswered) {
      state.submitted = true
    }
  },
  reset(state) {
    state.questions.forEach((element) => {
      element.value = null
    })
    state.countFamily = 0
    state.countSport = 0
    state.submitted = false
  }
}
