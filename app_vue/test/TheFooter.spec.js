import { mount } from '@vue/test-utils'
import TheFooter from '@/components/ui/TheFooter.vue'

describe('TheFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
