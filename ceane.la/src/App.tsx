// ■ from Ceane La. © 2020
// https://ceane.la
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Metadata from '@ceanela/metadata'
import FontLoader from '@ceanela/fontloader'
import Grid from '@ceanela/grid'
import themes from '@ceanela/themes'

import logo from './logo.svg'
import './App.css'

const App = () => (
  <ThemeProvider theme={themes}>
    <Metadata />
    <FontLoader />
    <Grid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grid>
  </ThemeProvider>
)

export default App
