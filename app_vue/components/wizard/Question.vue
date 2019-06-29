<template>
  <div class="level">
    <div v-if="question.type == 1" class="level-item has-text-left">
      <b-field>
        <b-numberinput min="0" v-model="questionAnswer" controls-rounded>
        </b-numberinput>
      </b-field>
    </div>
    <div v-if="question.type == 2" class="level-item has-text-left">
      <div v-if="question.options.length <= 6">
        <div v-for="option in question.options" v-bind:key="option.value">
          <div class="field">
            <b-radio
              v-model="questionAnswer"
              v-bind:native-value="option.value"
              type="is-info"
            >
              {{ option.text }}
            </b-radio>
          </div>
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
