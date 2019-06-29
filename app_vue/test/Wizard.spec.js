import { mount } from '@vue/test-utils'
import Wizard from '@/components/wizard/Wizard.vue'

describe('Wizard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Wizard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
