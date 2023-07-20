import React from 'react'

import { useFela } from 'react-fela'

import { cardContainer } from './styles'

const Stats = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  return (
    <div className={css(cardContainer(isDrilling))}>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default Stats
