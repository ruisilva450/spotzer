<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <div
          v-for="vehicle in vehicles"
          v-bind:key="vehicle.id"
          class="columns"
        >
          <div class="column is-full">
            <Detail v-bind:vehicle="vehicle" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Detail from '~/components/recomendation/list/Detail.vue'

export default Vue.extend({
  modules: {
    Detail
  },
  data() {
    return {
      vehicles: [
        {
          id: 1,
          image: 'https://loremflickr.com/320/240/suv,familycar?random=1',
          year: 2013,
          mileage: 63000
        },
        {
          id: 2,
          image: 'https://loremflickr.com/320/240/suv,familycar?random=1',
          year: 2013,
          mileage: 63000
        }
      ]
    }
  },
  methods: {
    loadAsyncData() {
      const carType =
        this.$state.store.recomendation.countFamily <
        this.$state.store.recomendation.countSports
          ? 'sports'
          : 'family'
      // this.$http.get('')
      // TODO: load data from server
      if (carType) {
        return true
      }
    }
  }
})
</script>
