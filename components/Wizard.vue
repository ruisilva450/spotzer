<template>
  <div>
    <v-stepper ref="stepper" v-model="index" :steps="questions.length" />

    {{ question.question }}

    <div v-if="question.type == 1">
      <input v-model="questionAnswer" type="number" min="0" />
    </div>
    <div v-if="question.type == 2">
      <div v-if="question.options.length <= 6">
        <template v-for="option in question.options">
          <input
            id="1"
            v-bind:key="option.value"
            type="radio"
            v-bind:value="option.value"
            v-model="questionAnswer"
          />
          <label v-bind:key="option.value" v-bind:value="option.value">
            {{ option.text }}
          </label>
        </template>
      </div>
      <div v-else>
        <!-- select -->
      </div>
    </div>

    <!-- Stepper Controls -->
    <div v-if="$refs.stepper">
      <button
        v-if="$refs.stepper.value > 1"
        type="button"
        @click="$refs.stepper.previous()"
      >
        Previous
      </button>

      <button
        v-if="$refs.stepper.value < 3"
        type="button"
        @click="$refs.stepper.next()"
      >
        Next
      </button>
      <button type="button" @click="$refs.stepper.reset() && reset()">
        Reset
      </button>
      <button v-if="$refs.stepper.value == 3" type="button" @click="finish()">
        Finish
      </button>
    </div>
    countSport: {{ countSport }}
    <br />
    countFamily: {{ countFamily }}
    <br />
    finished: {{ finished }}
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

// State
// const state = { steps: 3, step: undefined }

// Getters...
// Mutations...

// Export

import { VStepper } from 'vue-stepper-component'
import Vue from 'vue'
export default Vue.extend({
  components: {
    VStepper
  },
  data: () => ({
    index: 1,
    finished: false
  }),
  computed: {
    questions() {
      return this.$store.state.recomendation.questions
    },
    question() {
      return this.$store.state.recomendation.questions[this.index - 1]
    },
    ...mapState({
      countSport: (state) => {
        return state.recomendation.countSport
      },
      countFamily: (state) => {
        return state.recomendation.countFamily
      },
      finished: (state) => {
        return state.recomendation.finished
      }
    }),
    questionAnswer: {
      get() {
        return this.question.value
      },
      set(value) {
        this.$store.commit('recomendation/answer', {
          question: this.question,
          value: Number(value)
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      finish: 'recomendation/finish',
      reset: 'recomendation/reset'
    })
  }
})
</script>
