<template>
  <div>
    <v-stepper ref="stepper" v-model="index" :steps="questions.length" />

    {{ question.question }}

    <div v-if="question.type == 1">
      <input type="number" min="0" v-model="questionAnswer" />
    </div>
    <div v-if="question.type == 2">
      <div v-if="question.options.length <= 6">
        <input type="radio" id="1" value="1" v-model="questionAnswer" />
        <label for="1">Speed</label>

        <input type="radio" id="2" value="2" v-model="questionAnswer" />
        <label for="2">Comfort</label>
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
      <button type="button" @click="$refs.stepper.reset()">Reset</button>
      <button
        v-if="$refs.stepper.value == 3"
        type="button"
        @click="$refs.stepper.reset()"
      >
        Finish
      </button>
    </div>
    countSport: {{ countSport }}
    <br />
    countFamily: {{ countFamily }}
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
  data: () => ({ index: 1 }),
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
    addTodo(e) {
      this.$store.commit('recomendation/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'recomendation/toggle'
    })
  }
})
</script>
