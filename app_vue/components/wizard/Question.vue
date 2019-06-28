<template>
  <div>
    <div v-if="question.type == 1">
      <input v-model="questionAnswer" type="number" min="0" />
    </div>
    <div v-if="question.type == 2">
      <div v-if="question.options.length <= 6">
        <div v-for="option in question.options" v-bind:key="option.value">
          <input
            id="1"
            type="radio"
            v-bind:value="option.value"
            v-model="questionAnswer"
          />
          <label v-bind:value="option.value">{{ option.text }}</label>
          <br />
        </div>
      </div>
      <div v-else>
        <!-- select -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      required: true
    }
  },
  computed: {
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
  }
}
</script>
