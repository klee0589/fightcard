import React from 'react'
import FightCard from './FightCard'

import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'
import { Provider } from 'react-redux'
import store from '../../store'

describe('<FightCard />', () => {
  const renderer = createRenderer()

  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <RendererProvider renderer={renderer}>
          <FightCard />
        </RendererProvider>
      </Provider>
    )
  })
})
