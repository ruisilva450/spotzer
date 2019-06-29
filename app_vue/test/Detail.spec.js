import { mount } from '@vue/test-utils'
import Detail from '@/components/recomendation/list/Detail.vue'

describe('Detail', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Detail)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
