# Cloudflare Turnstile Widget Component for Vue 3

A Vue 3 component for showing the Cloudflare Turnstile widget on your project.

## What is Cloudflare Turnstile?
Cloudflare Turnstile is a CAPTCHA alternative from Cloudflare. It uses PAT protocol to verify the user’s devices, preventing bots and malicious users from accessing your site and ensuring your and your visitors’ privacy is protected.

[Introduction for Cloudflare Turnstile](https://blog.cloudflare.com/turnstile-private-captcha-alternative/)

## Showcases

### [Telegram Watchdog](https://github.com/tg-watchdog/tg-watchdog)

*Telegram Watchdog* is a Telegram bot used for anti-abuse from Telegram group chats.

<img src="https://i.imgur.com/p593rwY.jpg" width="300px"/>

[Get into Telegram Watchdog community to give a try](https://t.me/tgwatchdog_chat)

## Installation & Usage

```bash
yarn add cfturnstile-vue3
# or
npm install cfturnstile-vue3
```

```vue
<template>
  <div id="app">
    <cfturnstile
      :sitekey="sitekey"
      @verify="verify"
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Turnstile from 'cfturnstile-vue3'

export default defineComponent({
  name: 'App',
  components: {
    Turnstile
  },
  data() {
    return {
      sitekey: 'YOUR_SITE_KEY'
    }
  },
  methods: {
    verify(token) {
      console.log(token)
    }
  }
})
</scirpt>
```
