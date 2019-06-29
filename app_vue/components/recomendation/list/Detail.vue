<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <img :src="'https://loremflickr.com/320/240/' + carType" alt="" />
    </div>
    <div class="column">
      Year: {{ vehicle.year }}
      <br />
      Mileage: {{ vehicle.mileage }} Km
    </div>
    <div class="column is-narrow">
      <b-button icon-left="chevron-right" @click="clickMe">See more</b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  computed: {
    carType() {
      switch (this.vehicle.type) {
        case 'family':
          return 'suv,familycar'
        case 'sport':
          return 'sportscar'
        default:
          return 'car'
      }
    }
  },
  methods: {
    clickMe() {
      this.$toast.open({
        message: 'You tried to see this car!'
      })
    }
  }
})
</script>
