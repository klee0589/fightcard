import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'

import { TComboType } from './types'

import { background } from './styles'

const FightCard = () => {
  const { css } = useFela()
  const combos = useSelector((state: any) => state.combo)

  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(5)
  const [combo, setCombo] = useState<TComboType | null>(null)

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance()
    if (combo) {
      const splitCombo = combo.name.split('_')
      msg.text = 'Combo ' + splitCombo[1]
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
      console.log('pickedRandomCombo ', pickedRandomCombo)
      seconds === 0 && setCombo(pickedRandomCombo)
      seconds === 0 && setSeconds(5)
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
    <div style={background(isDrilling)}>
      <div
        className={css({
          width: '400px',
          height: '500px',
          borderRadius: '15px',
          background: '#F7F7FF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...(isDrilling && {
            animation: 'shakeX',
            animationDuration: '1s'
          })
        })}
      >
        <div
          className={css({
            fontSize: '32px',
            textTransform: 'uppercase',
            marginTop: '10px'
          })}
        >
          {combo && combo.name}
        </div>
        <div
          className={css({
            fontSize: '28px',
            textTransform: 'uppercase',
            height: '20px'
          })}
        >
          {seconds}
        </div>
        <div
          className={css({
            fontSize: '28px',
            textTransform: 'uppercase'
          })}
        >
          {comboFormatted()}
        </div>
        <div
          className={css({
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
          })}
        >
          <Button
            className={css({
              width: '100%',
              borderRadius: '0px !important'
            })}
            color='success'
            variant='contained'
            aria-label='Increment value'
            onClick={() => setIsDrilling(true)}
          >
            Start
          </Button>
          <Button
            className={css({
              width: '100%',
              borderRadius: '0px !important'
            })}
            color='error'
            variant='contained'
            aria-label='Decrement value'
            onClick={() => setIsDrilling(false)}
          >
            Stop
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FightCard
