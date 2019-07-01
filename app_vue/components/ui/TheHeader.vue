<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Car's Spotzer X</h1>
        <h2 class="subtitle">Let us know you better</h2>
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
