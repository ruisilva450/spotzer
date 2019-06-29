<template>
  <b-collapse id="resume" :open="submitted" aria-id="contentIdForA11y1">
    <div class="notification">
      <div class="content">
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <div class="title">
              We think you are better fitted with a
              <span v-if="countFamily > countSport"> family car </span>
              <span v-if="countFamily < countSport"> sports car </span>
            </div>
            <br />
            <img
              src="/family.jpg"
              alt="family car"
              v-if="countFamily > countSport"
            />
            <img
              src="/sports.jpg"
              alt="sports car"
              v-if="countFamily < countSport"
            />
          </div>
        </div>
      </div>
    </div>
  </b-collapse>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data: () => ({
    isOpen: false
  }),
  computed: {
    ...mapState({
      countSport: (state) => {
        return state.recomendation.countSport
      },
      countFamily: (state) => {
        return state.recomendation.countFamily
      },
      submitted: (state) => {
        return state.recomendation.submitted
      }
    })
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'recomendation/submit':
          if (state.recomendation.submitted) {
            debugger
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
