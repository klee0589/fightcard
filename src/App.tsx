import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import './App.css'

import FightCard from './components/FightCard/FightCard'
import Grid from '@mui/material/Grid'

const renderer = createRenderer()

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12}>
          <FightCard />
        </Grid>
      </Grid>
    </RendererProvider>
  )
}

export default App
