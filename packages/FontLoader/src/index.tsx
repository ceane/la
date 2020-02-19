// ■ from Ceane La. © 2020
// https://ceane.la
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FontFaceObserver from 'fontfaceobserver'

export interface FontLoaderProps {
  fontFace?: string
  fontUrl?: string
  children?: React.ReactChildren
}

export interface FontFaceProps {
  fontUrl?: string
}

const FontFace = styled.style`
  @import url(${(props: FontFaceProps) => props.fontUrl});
`

const FontLoader = ({
  fontFace = 'Roboto Mono', 
  fontUrl = 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
  children
}: FontLoaderProps): JSX.Element  => {
  const [isLoading, setIsLoading] = useState(true)
  const font = new FontFaceObserver(fontFace)

  useEffect(() => {
    font.load().then(() => setIsLoading(false))
  })

  return (
    <>
      <FontFace fontUrl={fontUrl} />
      {!isLoading && children}
    </>
  )
}

export default FontLoader
