declare global {
  interface Window {
    turnstile?: {
      getResponse: () => Promise<string>
      render: (element: string | HTMLElement, options: { sitekey: string, callback: Function, 'expired-callback': Function | void, 'error-callback': Function | void }) => void
      reset: () => void
    },
    onloadTurnstileCallback?: () => void
  }
}

import TurnstileComponent from './TurnstileComponent.vue'
export default TurnstileComponent
