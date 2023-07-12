import Script from 'next/script'
import React from 'react'

import { GoogleTagManagerClient } from './Client'

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Prepare the dataLayer without loading gtm.js
 *
 * This is a React Element, not a component, see example.
 *
 * @example
 * <head>{GoogleTagManagerHead}</head>
 */
export const GoogleTagManagerHead = GTM_ID ? (
  <script
    id="gtm-head"
    dangerouslySetInnerHTML={{
      __html: `window.dataLayer=window.dataLayer||[{'gtm.start':new Date().getTime(),event:'gtm.js'}];`,
    }}
  />
) : null

/**
 * Load gtm.js after page is interactive
 *
 * @example
 * <body>
 *   {children}
 *   {GoogleTagManagerBody}
 * </body>
 */
export const GoogleTagManagerBody = GTM_ID ? (
  <>
    <GoogleTagManagerClient />
    <Script
      src={`//www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      async
      defer
      id="gtm-body"
      strategy="afterInteractive"
    />
    <noscript>
      <iframe
        src={`//www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  </>
) : (
  <GoogleTagManagerClient />
)
