// ■ from Ceane La. © 2020
// ceanela.github.io
import React from 'react'
import { Helmet } from 'react-helmet'

export interface MetadataProps {
  path?: string;
  locale?: string;
  topic: string;
  tagline?: string;
  keywords?: string;
}

const Metadata = ({
  locale = "en",
  keywords,
  path,
  topic,
  tagline,
}: MetadataProps): JSX.Element => (
  <Helmet>
    <html lang={locale} />
    <meta charSet="utf-8" />
    <link rel="prefetch" />
    <link rel="canonical" href={path} />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    {tagline && <meta property="og:description" content={tagline} />}
    {tagline && <meta property="description" content={tagline} />}
    <meta property="og:title" content={topic} />
    <meta property="og:url" content={path} />
    <meta name="keywords" content={keywords} />
    <title lang={locale}>{topic}</title>
  </Helmet>
)

export default Metadata