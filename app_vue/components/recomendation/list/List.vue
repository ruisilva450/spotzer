<template>
  <b-collapse id="resume" :open="submitted" aria-id="contentIdForA11y1">
    <div class="notification">
      <div class="content">
        vehicleType: {{ vehicleType }}

        <section class="section">
          <div class="columns is-centered">
            <div class="column is-half">
              <div
                v-for="vehicle in vehicles"
                v-bind:key="vehicle.id"
                class="columns card"
              >
                <div class="column is-full">
                  <Detail v-bind:vehicle="vehicle" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </b-collapse>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import debounce from 'lodash.debounce'
import Detail from '~/components/recomendation/list/Detail.vue'

export default Vue.extend({
  components: {
    Detail
  },
  data() {
    return {
      vehicles: [
        {
          id: 1,
          image: 'https://loremflickr.com/320/240/suv,familycar?random=1',
          type: 'sport',
          year: 2013,
          mileage: 63000
        },
        {
          id: 2,
          image: 'https://loremflickr.com/320/240/suv,familycar?random=1',
          type: 'family',
          year: 2013,
          mileage: 63000
        }
      ]
    }
  },
  computed: {
    vehicleType() {
      if (this.countSport === this.countFamily) {
        return null
      }

      if (this.submitted) {
        this.debouncedGetVehicles()
      }

      return this.countSport < this.countFamily ? 'family' : 'sport'
    },
    ...mapState({
      countSport: (state) => {
        return state.recomendation.countSport
      },
      countFamily: (state) => {
        return state.recomendation.countFamily
      },
      submitted: (state) => {
        return state.recomendation.submitted
      },
      vehicles: (state) => {
        return state.recomendation.vehicles
      }
    })
  },
  created() {
    this.debouncedGetVehicles = debounce(this.loadAsyncData, 100)
  },
  methods: {
    loadAsyncData() {
      debugger
      if (this.vehicleType) {
        this.$store.dispatch('recomendation/getVehicles', this.vehicleType)
      }
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'recomendation/submit':
          if (state.recomendation.submitted) {
            document.querySelector('#resume').scrollIntoView({
              behavior: 'smooth'
            })
          }
          break
      }
    })
  }
})
</script>
