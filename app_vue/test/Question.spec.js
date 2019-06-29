import { mount } from '@vue/test-utils'
import Question from '@/components/wizard/Question.vue'

describe('Question', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Question)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
