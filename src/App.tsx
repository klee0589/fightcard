import React from 'react'
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'

import './App.css'

import FightCard from './components/FightCard/FightCard'

import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

const renderer = createRenderer()

const App = () => {
  const actions = [
    { icon: <div />, name: 'Copy' },
    { icon: <div />, name: 'Save' },
    { icon: <div />, name: 'Print' },
    { icon: <div />, name: 'Share' }
  ]

  return (
    <RendererProvider renderer={renderer}>
      <FightCard />
      <SpeedDial ariaLabel='SpeedDial basic example' sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </RendererProvider>
  )
}

export default App
