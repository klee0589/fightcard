import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import './App.css'

import FightCard from './components/core/FightCard/FightCard'

const renderer = createRenderer()

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <div className='App'>
        <FightCard />
      </div>
    </RendererProvider>
  )
}

export default App
