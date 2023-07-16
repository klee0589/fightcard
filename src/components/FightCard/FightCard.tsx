import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'

import { TComboType } from './types'

import { mainContainer, cardContainer, comboName, timer, buttonContainer, button } from './styles'

const FightCard = () => {
  const comboIntervalTime: number = 3

  const { css } = useFela()
  const combos = useSelector((state: any) => state.combo)

  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(comboIntervalTime)
  const [combo, setCombo] = useState<TComboType | null>()

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance()
    if (combo) {
      const splitCombo = combo.name.split('_')
      msg.text = 'Combo ' + splitCombo[1]
      msg.volume = 0.7
      isDrilling && window.speechSynthesis.speak(msg)
    }
  }, [combo, isDrilling])

  useEffect(() => {
    if (seconds > 0 && isDrilling) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
  }, [seconds, isDrilling])

  useEffect(() => {
    if (seconds <= 1) {
      const pickedRandomCombo = combos[Math.floor(Math.random() * 20)]
      seconds === 0 && setCombo(pickedRandomCombo)
      seconds === 0 && setSeconds(comboIntervalTime)
    }
  }, [seconds])

  useEffect(() => {
    const pickedRandomCombo = combos[Math.floor(Math.random() * 20)]
    setCombo(pickedRandomCombo)
  }, [])

  const comboFormatted = () => {
    if (combo) {
      const { combination } = combo
      return combination.map((strike: string, index: number) => (
        <div
          key={combo + ' ' + index}
          className={css({
            margin: '3px 0'
          })}
        >
          {strike}
        </div>
      ))
    }
  }

  return (
    <div className={css(mainContainer(isDrilling))}>
      <div className={css(cardContainer(isDrilling))}>
        <div className={css(comboName)}>{combo?.name}</div>
        <div className={css(timer)}>{seconds}</div>
        <div
          className={css({
            fontSize: '28px',
            textTransform: 'uppercase'
          })}
        >
          {comboFormatted()}
        </div>
        <div className={css(buttonContainer)}>
          <Button
            sx={button}
            fullWidth
            color={isDrilling ? 'error' : 'success'}
            variant='contained'
            onClick={() => setIsDrilling(!isDrilling)}
          >
            {isDrilling ? 'STOP' : 'START'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FightCard
