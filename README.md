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
<script setup lang="ts">
import Turnstile from 'cfturnstile-vue3'
</script>

<template>
  <Turnstile 
    sitekey="0x4AAAAAAAA8unmWcFmhPGDC"
    @callback="e => console.log('success', e)"
    size="compact"
  />
</template>
```

Refer to [official document](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#configurations) for all configurations.

## Upgrade from v1.0.0
We aligned the configuration parameters with the official widget document in version 2.0.0, which is disruptive for existing v1.0.0 users. Please remember to update the parameters to ensure that the widget works as normal.