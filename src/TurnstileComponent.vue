<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: "TurnstileComponent",
  props: {
    sitekey: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div ref="turnstileBox" />
</template>

<style scoped>

</style>
