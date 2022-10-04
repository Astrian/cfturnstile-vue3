declare global {
  interface Window {
    turnstile?: {
      getResponse: () => Promise<string>
      render: (element: HTMLElement, options: { sitekey: string}) => void
      reset: () => void
    },
    onloadTurnstileCallback?: () => void
  }
}

import TurnstileComponent from './TurnstileComponent.vue'
export default TurnstileComponent
