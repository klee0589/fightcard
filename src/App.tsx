import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider, useFela } from 'react-fela'

import './App.css'

import FightCard from './components/FightCard/FightCard'
import Practice from './components/Practice'

const renderer = createRenderer()

const App = () => {
  return (
    <RendererProvider renderer={renderer}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#279AF1' }}>
        {/* <FightCard /> */}
        <Practice />
      </div>
    </RendererProvider>
  )
}

export default App
