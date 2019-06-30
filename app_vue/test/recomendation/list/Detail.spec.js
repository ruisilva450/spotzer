import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Detail from '@/components/recomendation/list/Detail.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('Detail', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Detail, {
      localVue: localVue,
      propsData: {
        vehicle: {
          id: 1,
          image: 'https://loremflickr.com/320/240/suv,familycar?random=1',
          type: 'sport',
          year: 2013,
          mileage: 63000
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
