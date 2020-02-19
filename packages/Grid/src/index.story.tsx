// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import styled from 'styled-components'
import Grid from '.'

const A = styled.div`
  width: 100%;
  min-height: 90px;
  background-color: #f6f6f6;
`

const B = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #f0f0f0;
`

const C = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #e7e7e7;
`

export default { title: 'Grid' }

export const withDefaults = () => (
  <Grid>
    <A />
    <B />
    <C />
  </Grid>
)
