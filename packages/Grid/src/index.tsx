// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import styled from 'styled-components'

export interface GridProps {
  grid?: string
}

const Grid = styled.div`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: subpixel-antialiased;
  background: #fff;
  color: #0e0e0e;
  display: grid;
  grid: ${({ grid = 'auto 1fr auto/auto' }: GridProps) => grid};
`

export default Grid