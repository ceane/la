// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import styled from 'styled-components'
import Annotation from '@ceanela/annotation'
import { Row } from '@ceanela/flex'

const DarkGrey = styled.span`
  color: #828282;
`

const topLinks = [
  'pronounced as “Shawn” ■ from Ceane La. © 2020',
  `■ from ${<DarkGrey>CEO Ceane La. © 2020</DarkGrey>} in San Francisco, California`
]

const bottomLinks = [
  `🔗 ${<DarkGrey>What’s a Focus™?</DarkGrey>} of Ceane Corporation`,
  `/  🔗 ${<DarkGrey>Resume</DarkGrey>}  /`,
  `🔗 ${<DarkGrey>Growth</DarkGrey>} of Github`,
  `/  🔗 ${<DarkGrey>Kanban</DarkGrey>} of Trello`
]

const Header = () => (
  <header>
    <Row>
      {topLinks.map(cite => <Annotation>{cite}</Annotation>)}
    </Row>
    <Row>
      {bottomLinks.map(cite => <Annotation>{cite}</Annotation>)}
    </Row>
  </header>
)

export default Header
