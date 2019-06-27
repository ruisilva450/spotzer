<template>
  <div>
    <v-stepper ref="stepper" v-model="index" :steps="questions.length" />

    {{ question.question }}

    <Question v-bind:question="question" />

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
      <button
        type="button"
        @click="
          $refs.stepper.reset()
          reset()
        "
      >
        Reset
      </button>
      <button v-if="$refs.stepper.value == 3" type="button" @click="submit()">
        Finish
      </button>
    </div>
    finished: {{ submitted }}
    <br />
    countSport: {{ countSport }}
    <br />
    countFamily: {{ countFamily }}
  </div>
</template>

<script>
import Vue from 'vue'
import { VStepper } from 'vue-stepper-component'
import { mapMutations, mapState } from 'vuex'

import Question from '~/components/wizard/Question.vue'
export default Vue.extend({
  components: {
    VStepper,
    Question
  },
  data: () => ({
    index: 1
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
      submitted: (state) => {
        return state.recomendation.submitted
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
      submit: 'recomendation/submit',
      reset: 'recomendation/reset'
    })
  }
})
</script>
