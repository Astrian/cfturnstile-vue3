declare global {
  interface Window {
    turnstile?: {
      getResponse: () => Promise<string>
      render: (element: string | HTMLElement, options: {
        sitekey: string, 
        callback: Function, 
        'expired-callback': Function | void, 
        'error-callback': Function | void,
        action?: string,
        cData?: string,
        execution?: "render" | "execute",
        "before-interactive-callback"?: Function,
        "after-interactive-callback"?: Function,
        "unsupported-callback"?: Function,
        theme?: "light" | "dark" | "auto",
        language?: string,
        tabindex?: number,
        "timeout-callback"?: Function,
        "response-field"?: string,
        "response-field-name"?: string,
        size?: "normal" | "flexible" | "compact",
        retry?: "auto" | "never",
        "retry-interval"?: number,
        "refresh-expired"?: "auto" | "manual" | "never",
        "refresh-timeout"?: "auto" | "manual" | "never",
        apperance?: "always" | "execute" | "interaction-only",
        "feedback-enabled"?: boolean,
      }) => void
      reset: () => void
    },
    onloadTurnstileCallback?: () => void
  }
}

import TurnstileComponent from './TurnstileComponent.vue'
export default TurnstileComponent
