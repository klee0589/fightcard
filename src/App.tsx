import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import './App.css'

import FightCard from './components/FightCard/FightCard'
// import Practice from './components/Practice'
import ControlBar from './ui/ControlBar/ControlBar'

const renderer = createRenderer()

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <FightCard />
      <ControlBar />
    </RendererProvider>
  )
}

export default App
