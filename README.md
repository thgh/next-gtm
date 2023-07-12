## Google Tag Manager for Next.js 13 RSC

Install

```bash
yarn add @thgh/next-gtm
```

Add your GTM ID as an environment variable in `.env` or `.env.local`

```bash
NEXT_PUBLIC_GTM_ID=GTM-3X4MP7E
```

Add this snippet in `app/layout.tsx`

```tsx
import { GoogleTagManagerBody, GoogleTagManagerHead } from '@thgh/next-gtm'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>{GoogleTagManagerHead}</head>
      <body>
        {children}
        {GoogleTagManagerBody}
      </body>
    </html>
  )
}
```
