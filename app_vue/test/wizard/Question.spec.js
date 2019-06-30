import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Question from '@/components/wizard/Question.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('Question', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Question, {
      localVue: localVue,
      propsData: {
        question: {
          id: 1,
          question: 'How many people are there in your household?',
          type: 1,
          value: 1,
          countFamily: {
            min: 3,
            value: 50
          },
          countSport: {
            max: 2,
            value: 50
          }
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('receives a question type 2', () => {
    const wrapper = shallowMount(Question, {
      localVue: localVue,
      propsData: {
        question: {
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
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
