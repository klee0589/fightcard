import React from 'react'

import { useFela } from 'react-fela'

import { cardContainer } from './styles'

const ControlBar = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  return <div className={css(cardContainer(isDrilling))}></div>
}

export default ControlBar
