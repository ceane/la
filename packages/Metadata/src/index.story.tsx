// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import Metadata from '.'

import G from '@ceanela/grid'

const F = () => (
  <G />
)

export default { title: 'Metadata' }

export const withDefaults = () => (
  <Metadata
    path={window.location.href}
    topic="Ceane La."
    tagline="Software engineer in SF" />
)
