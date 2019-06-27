export const state = () => ({
  questions: [
    {
      id: 1,
      question: 'How many people are there in your household?',
      type: 1,
      value: null,
      countFamily: {
        min: 3,
        value: 50
      },
      countSport: {
        max: 2,
        value: 50
      }
    },
    {
      id: 2,
      question: 'How many people are there in your household?',
      type: 2,
      value: null,
      options: [
        {
          text: 'Speed',
          value: 1,
          countFamily: 0,
          countSport: 50
        },
        {
          text: 'Comfort',
          value: 2,
          countFamily: 50,
          countSport: 0
        }
      ]
    },
    {
      id: 3,
      question: 'How many people are there in your household?',
      type: 2,
      value: null,
      options: [
        {
          text: 'I want people to notice me! ',
          value: 1,
          countFamily: 0,
          countSport: 50
        },
        {
          text: "I'm happy to blend in!",
          value: 2,
          countFamily: 50,
          countSport: 0
        }
      ]
    }
  ],
  countSport: 0,
  countFamily: 0,
  submitted: false
})

export const mutations = {
  answer(state, { question, value }) {
    const foundQuestion = state.questions.find((q) => {
      return q.id === question.id
    })

    foundQuestion.value = value

    let countFamily = 0
    let countSport = 0

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
        }
      }
    }

    state.countFamily = countFamily
    state.countSport = countSport
  },
  submit(state) {
    state.submitted = true
  },
  reset(state) {
    debugger
    state.questions.forEach((element) => {
      element.value = null
    })
    state.countFamily = 0
    state.countSport = 0
    state.submitted = false
  }
}
