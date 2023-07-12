'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
export const GTM_LOG = !!process.env.NEXT_PUBLIC_GTM_LOG

export const GoogleTagManagerClient = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (GTM_LOG) {
    useEffect(() => {
      console.log('next-gtm', GTM_ID)
    }, [])
  }

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return null
}

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    const input = { event: 'pageview', page: url }
    window.dataLayer.push(input)
    if (GTM_LOG) {
      console.log('next-gtm', input)
    }
  }
}
