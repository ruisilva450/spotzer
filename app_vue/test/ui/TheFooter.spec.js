import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import TheFooter from '@/components/ui/TheFooter.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('TheFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TheFooter, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
