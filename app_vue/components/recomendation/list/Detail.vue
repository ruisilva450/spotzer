<template>
  <div>{{ vehicle }}</div>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  }
}
</script>
