"use client"

import { useEffect } from "react"

const WEBHOOK_URL =
  "https://n8n.srv1836419.hstgr.cloud/webhook/d6ee1bd0-c76f-419a-999a-cdafd1c0a59b/chat"

const CDN_CSS =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"

const CDN_JS =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"

// CSS variable overrides — injected after the n8n stylesheet so they win
const BRAND_OVERRIDES = `
  :root {
    /* ── Primary palette ─────────────────────────────────────────── */
    --chat--color--primary:             #CF5E38;   /* --color-terracotta */
    --chat--color--primary-shade-50:    #A84A2A;   /* --color-terracotta-dark */
    --chat--color--primary--shade-100:  #A84A2A;   /* --color-terracotta-dark */
    --chat--color--secondary:           #CF5E38;
    --chat--color-secondary-shade-50:   #A84A2A;
    --chat--color-dark:                 #231A10;   /* --color-espresso */
    --chat--color-light:                #FBF5EE;   /* --color-foam */

    /* ── Window ──────────────────────────────────────────────────── */
    --chat--window--width:              380px;
    --chat--window--height:             560px;
    --chat--window--border-radius:      1.25rem;   /* --radius-lg (20px) */
    --chat--window--box-shadow:         0 8px 40px rgba(35, 26, 16, 0.15); /* --shadow-hover */
    --chat--window--border:             1px solid #DFC9B4; /* --color-border */

    /* ── Toggle button (chat bubble) ─────────────────────────────── */
    --chat--toggle--background:         #CF5E38;   /* --color-terracotta — matches Terracotta CTA variant */
    --chat--toggle--hover--background:  #A84A2A;   /* --color-terracotta-dark */
    --chat--toggle--active--background: #A84A2A;   /* --color-terracotta-dark */
    --chat--toggle--color:              #FFFFFF;   /* white icon on terracotta */
    --chat--toggle--size:               56px;      /* lg button size: 56px */
    --chat--toggle--box-shadow:         0 4px 16px rgba(207, 94, 56, 0.35); /* --shadow-cta */

    /* ── Header ──────────────────────────────────────────────────── */
    --chat--header--background:         #231A10;   /* --color-espresso */
    --chat--header--color:              #FBF5EE;   /* --color-foam */
    --chat--header--padding:            1rem 1.5rem; /* 16px 24px — on 4px grid, matches --spacing-card-p */
    --chat--header--border-bottom:      none;
    --chat--heading--font-size:         1rem;      /* --text-md (16px) — DM Sans, UI label size */
    --chat--heading--font-weight:       600;       /* --font-weight-semibold */
    --chat--subheading--font-size:      0.75rem;   /* --text-xs (12px) */
    --chat--subheading--color:          rgba(251, 245, 238, 0.65); /* foam at 65% on espresso bg */

    /* ── Chat body ───────────────────────────────────────────────── */
    --chat--body--background:           #F0DCCA;   /* --color-cream */

    /* ── Message bubbles ─────────────────────────────────────────── */
    --chat--border-radius:              0.75rem;   /* --radius-md (12px) — inputs and small panels */
    --chat--message--font-size:         0.875rem;  /* --text-sm (14px) */
    --chat--message--padding:           0.75rem 1rem; /* 12px 16px — on 4px grid */
    --chat--message--bot--background:   #FBF5EE;   /* --color-foam */
    --chat--message--bot--color:        #231A10;   /* --color-espresso */
    --chat--message--user--background:  #CF5E38;   /* --color-terracotta */
    --chat--message--user--color:       #FFFFFF;   /* white — stronger contrast on terracotta */

    /* ── Footer / input ──────────────────────────────────────────── */
    --chat--footer--background:         #FBF5EE;   /* --color-foam */
    --chat--footer--color:              #231A10;   /* --color-espresso */
    --chat--footer--padding:            0.75rem 1rem; /* 12px 16px — on 4px grid */
    --chat--footer--border-top:         1px solid #DFC9B4; /* --color-border */
    --chat--input--background:          #FBF5EE;   /* --color-foam */
    --chat--input--color:               #231A10;   /* --color-espresso */
    --chat--input--border:              1px solid #DFC9B4; /* --color-border */
    --chat--input--border-radius:       0.75rem;   /* --radius-md (12px) */
    --chat--input--padding:             0.75rem 1rem; /* 12px 16px — on 4px grid */
    --chat--textarea--height:           44px;      /* 11 × 4px grid */
  }
`

export function N8nChat() {
  useEffect(() => {
    // 1. Inject n8n stylesheet
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = CDN_CSS
    link.id = "n8n-chat-css"
    document.head.appendChild(link)

    // 2. Inject brand overrides AFTER n8n stylesheet so our vars win
    link.onload = () => {
      const style = document.createElement("style")
      style.id = "n8n-chat-brand"
      style.textContent = BRAND_OVERRIDES
      document.head.appendChild(style)
    }

    // 3. Inject ES module script to init chat
    const script = document.createElement("script")
    script.type = "module"
    script.id = "n8n-chat-init"
    script.textContent = `
      import { createChat } from '${CDN_JS}';
      createChat({
        webhookUrl: '${WEBHOOK_URL}',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: false,
        initialMessages: [
          'Olá! Bem-vindo ao Brew & Co. ☕',
          'Posso ajudar com informações sobre o cardápio, reservas ou eventos. Como posso ajudar?',
        ],
        i18n: {
          en: {
            title: 'Brew & Co',
            subtitle: 'Specialty Coffee · Dalston, London',
            footer: '',
            getStarted: 'Iniciar conversa',
            inputPlaceholder: 'Digite sua mensagem…',
          },
        },
      });
    `
    document.body.appendChild(script)

    return () => {
      document.getElementById("n8n-chat-css")?.remove()
      document.getElementById("n8n-chat-brand")?.remove()
      document.getElementById("n8n-chat-init")?.remove()
    }
  }, [])

  return null
}
