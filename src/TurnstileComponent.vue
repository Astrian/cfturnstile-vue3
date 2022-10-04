<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: "TurnstileComponent",
  props: {
    sitekey: {
      type: String,
      required: true
    }
  },
  emits: {
    verify: (response: string) => {
        if (response !== null && response !== "") return true
        else return false
    },
    expire: null,
    fail: null
  },
  setup(props, context) {
    const turnstileBox = ref(null)
    onMounted(() => {
      if (window.turnstile === null || !window.turnstile) {
        const script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
        script.async = true
        script.defer = true
        document.head.appendChild(script)
      }
      renderTurnstile()
    })

    function renderTurnstile() {
      window.onloadTurnstileCallback = () => {
        window.turnstile?.render("#turnstile-box", {
          sitekey: props.sitekey,
          callback: (response: string) => context.emit('verify', response),
          'expired-callback': context.emit('expire'),
          'error-callback': context.emit('fail')
        })
      }
    }
  }

})
</script>

<template>
  <div ref="turnstileBox" id="turnstile-box"></div>
</template>

<style scoped>

</style>
