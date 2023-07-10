import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import './App.css'

import FightCard from './components/FightCard/FightCard'
// import Practice from './components/Practice'

const renderer = createRenderer()

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <FightCard />
    </RendererProvider>
  )
}

export default App
