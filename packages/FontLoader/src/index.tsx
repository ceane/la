// ■ from Ceane La. © 2020
// https://ceane.la
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import FontFaceObserver from 'fontfaceobserver'

export interface FontLoaderProps {
  fontFace?: string
  fontUrl?: string
  children?: React.ReactChildren
}

export interface FontFaceProps {
  fontUrl?: string
}

const FontFace = ({ fontUrl }: FontFaceProps) => (
  <link href={fontUrl} />
)

const FontLoader = ({
  fontFace = 'Roboto Mono',
  fontUrl = 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
  children
}: FontLoaderProps): JSX.Element  => {
  const [isLoading, setIsLoading] = useState(true)
  const font = new FontFaceObserver(fontFace)

  useEffect(() => {
    const loadFont = async () => {
      return await font.load()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false))
    }

    loadFont()
  })

  return (
    <>
      <Helmet>
        <FontFace fontUrl={fontUrl} />
      </Helmet>
      {!isLoading && children}
    </>
  )
}

export default FontLoader