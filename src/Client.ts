'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer

export const NEXT_PUBLIC_GTM_LOG = !!process.env.NEXT_PUBLIC_GTM_LOG

export const GoogleTagManagerClient = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

  if (NEXT_PUBLIC_GTM_LOG) {
    useEffect(() => {
      console.log('next-gtm enabled')
    }, [])
  }

  return null
}

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    const input = { event: 'pageview', page: url }
    window.dataLayer.push(input)
    if (NEXT_PUBLIC_GTM_LOG) {
      console.log('next-gtm', input)
    }
  }
}
