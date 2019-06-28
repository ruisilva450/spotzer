<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Primary bold title</h1>
        <h2 class="subtitle">Primary bold subtitle</h2>

        <wizard />
      </div>
    </div>
  </section>
</template>

<script>
import Wizard from '~/components/wizard/Wizard.vue'
export default {
  components: {
    Wizard
  }
}
</script>
