import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Vuex from 'vuex'
import List from '@/components/recomendation/list/List.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('List', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(List, localVue)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
