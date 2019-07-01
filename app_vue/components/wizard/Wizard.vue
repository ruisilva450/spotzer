<template>
  <div>
    <b-loading :is-full-page="true" :active="questions.length == 0"></b-loading>
    <div v-if="questions.length > 0">
      <v-stepper ref="stepper" v-model="index" :steps="questions.length" />

      <section class="section">
        <div class="container">
          <div class="subtitle has-text-weight-semibold">
            {{ question.question }}
          </div>
        </div>
      </section>

      <div class="columns is-vcentered is-mobile">
        <div class="column is-one-fifth">
          <b-button
            rounded
            icon-left="chevron-left"
            size="is-large"
            v-if="index > 1"
            @click="$refs.stepper.previous()"
          ></b-button>
        </div>

        <div class="column">
          <section class="section">
            <Question v-bind:question="question" />
          </section>
        </div>

        <div class="column is-one-fifth">
          <b-button
            rounded
            icon-right="chevron-right"
            size="is-large"
            v-if="index < 3"
            @click="$refs.stepper.next()"
          ></b-button>
          <b-button
            rounded
            icon-right="check"
            size="is-large"
            v-if="index == 3"
            :disabled="!allAnswered"
            @click="submit()"
          >
            Finish
          </b-button>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column">
          <b-button rounded size="is-large" @click="reset()">
            Reset
          </b-button>
        </div>
      </div>
    </div>
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
      allAnswered: (state) => {
        return state.recomendation.allAnswered
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
