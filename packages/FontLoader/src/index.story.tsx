// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import FontLoader from '.'
import Text from 'packages/.Annotation/lib/node_modules/@ceanela/text'

export default { title: 'FontLoader' }

export const withDefaults = () => (
  <>
    <FontLoader />
    <Text>
      Hi I'm a Text component with FontLoader
    </Text>
  </>
)
