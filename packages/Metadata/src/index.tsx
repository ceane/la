// ■ from Ceane La. © 2020
// https://ceane.la
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export interface MetadataProps {
  path?: string
  locale?: string
  topic: string
  tagline?: string
  keywords?: string
}

const Metadata = ({
  locale = "en",
  keywords,
  path,
  topic,
  tagline,
}: MetadataProps): JSX.Element => {

  /* Analytics, nonce */
  useEffect(() => {
    const gaScript = document.createElement('script')
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-L57PQLG0NE"
    gaScript.async = true
    document.body.appendChild(gaScript)

    // @ts-ignore
    const dataLayer = window.dataLayer = window.dataLayer || []
    const gtag = (...arg) => dataLayer.push(arg)
    gtag('js', new Date())
    gtag('config', 'G-L57PQLG0NE')
  }, [])

  return (
    <Helmet>
      <html lang={locale} />
      <meta charSet="utf-8" />
      { /* DNS prefetch aka resolve the DNS */ }
      {path && <link rel="dns-prefetch" href={path} />}
      { /* DNS prefetch & TLS handshake */ }
      {path && <link rel="preconnect" href={path} />}
      { /* ask browser to fetch asset and store in cache */ }
      {path && <link rel="prefetch" href={path} />}
      <link rel="canonical" href={path} />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      {tagline && <meta property="og:description" content={tagline} />}
      {tagline && <meta property="description" content={tagline} />}
      <meta property="og:title" content={topic} />
      {path && <meta property="og:url" content={path} />}
      <meta name="keywords" content={keywords} />
      <title lang={locale}>{topic}</title>
    </Helmet>
  )
}

export default Metadata
