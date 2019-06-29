<template>
  <div>
    <TheHeader />
    <Resume />
    <List />
  </div>
</template>

<script>
import TheHeader from '~/components/ui/TheHeader.vue'
import Resume from '~/components/recomendation/Resume.vue'
import List from '~/components/recomendation/list/List.vue'

export default {
  components: {
    TheHeader,
    Resume,
    List
  }
}
</script>

<style></style>
