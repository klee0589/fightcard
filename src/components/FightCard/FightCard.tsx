import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'
// import Stats from '../Stats/Stats'

import { TComboType } from './types'

import { mainContainer, cardContainer, comboName, timer, buttonContainer, startButton, bottomButton } from './styles'

// import { removeById } from '../../state/combos/comboSlice'
import { add } from '../../state/stats/statsSlice'

const FightCard = () => {
  const comboIntervalTime: number = 3

  const { css } = useFela()
  const dispatch = useDispatch()

  const combos = useSelector((state: any) => state.combo)

  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(comboIntervalTime)
  const [combo, setCombo] = useState<TComboType | null>()

  const [drilledCombos, setDrilledCombos] = useState<any>([])

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance()
    if (combo) {
      const { combination, name } = combo

      const splitCombo = name.split('_')
      msg.text = 'Combo ' + splitCombo[1]
      msg.volume = 0.7
      isDrilling && window.speechSynthesis.speak(msg)
      setDrilledCombos([...drilledCombos, combo])

      combination.map((combo: string) => {
        switch (combo) {
          case 'Right Uppercut':
            dispatch(add('rUppercut'))
            break
          case 'Left Uppercut':
            dispatch(add('lUppercut'))
            break
          case 'Jab':
            dispatch(add('jab'))
            break
          case 'Cross':
            dispatch(add('cross'))
            break
          case 'Right Hook':
            dispatch(add('rHook'))
            break
          case 'Left Hook':
            dispatch(add('lHook'))
            break
          case 'Right Overhand':
            dispatch(add('rOverhand'))
            break
          default:
            break
        }
      })
    }
  }, [combo, isDrilling])

  useEffect(() => {
    if (seconds > 0 && isDrilling) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    } else {
      setSeconds(comboIntervalTime)
    }
  }, [seconds, isDrilling])

  useEffect(() => {
    if (seconds <= 1) {
      const pickedRandomCombo = combos[Math.floor(Math.random() * 20)]
      seconds === 0 && setCombo(pickedRandomCombo)
      seconds === 0 && setSeconds(comboIntervalTime)
    }
  }, [seconds])

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
      {/* <div className={css(recordContainer(isDrilling))}>
        {drilledCombos &&
          drilledCombos.map((drilledCombo: any, index: number) => {
            return (
              <div key={drilledCombo.name + '_' + index} style={{ margin: '5px 0' }}>
                <div>
                  {index + 1}. {drilledCombo.name} - {drilledCombo.combination}
                </div>
                <div>
                  <Button
                    sx={startButton}
                    // fullWidth
                    color={'error'}
                    variant='contained'
                    onClick={() => {
                      if (drilledCombo.name) {
                        dispatch(removeById(drilledCombo.name))
                        setDrilledCombos(drilledCombos.filter((item: any) => item.name !== drilledCombo.name))
                      }
                    }}
                  >
                    {'DELETE'}
                  </Button>
                </div>
              </div>
            )
          })}
      </div> */}
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
            sx={startButton}
            fullWidth
            color={isDrilling ? 'error' : 'success'}
            variant='contained'
            onClick={() => setIsDrilling(!isDrilling)}
          >
            {isDrilling ? 'STOP' : 'START'}
          </Button>
          <Button
            sx={bottomButton}
            fullWidth
            color={'info'}
            variant='contained'
            onClick={() => {
              setDrilledCombos([])
              setIsDrilling(false)
              setSeconds(3)
            }}
          >
            RESET
          </Button>
        </div>
      </div>
      {/* <Stats isDrilling={isDrilling} /> */}
    </div>
  )
}

export default FightCard
