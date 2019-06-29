import { mount } from '@vue/test-utils'
import Resume from '@/components/recomendation/Resume.vue'

describe('Resume', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Resume)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
