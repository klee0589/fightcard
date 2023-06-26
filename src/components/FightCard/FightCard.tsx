import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'

import { Howl } from 'howler'

import Combo_1 from '../../assets/combos/combo_1.mp3'
import Combo_2 from '../../assets/combos/combo_2.mp3'
import Combo_3 from '../../assets/combos/combo_3.mp3'
import Combo_4 from '../../assets/combos/combo_4.mp3'
import Combo_5 from '../../assets/combos/combo_5.mp3'
import Combo_6 from '../../assets/combos/combo_6.mp3'
import Combo_7 from '../../assets/combos/combo_7.mp3'
import Combo_8 from '../../assets/combos/combo_8.mp3'
import Combo_9 from '../../assets/combos/combo_9.mp3'
import Combo_10 from '../../assets/combos/combo_10.mp3'
import Combo_11 from '../../assets/combos/combo_11.mp3'
import Combo_12 from '../../assets/combos/combo_12.mp3'
import Combo_13 from '../../assets/combos/combo_13.mp3'
import Combo_14 from '../../assets/combos/combo_14.mp3'
import Combo_15 from '../../assets/combos/combo_15.mp3'
import Combo_16 from '../../assets/combos/combo_16.mp3'
import Combo_17 from '../../assets/combos/combo_17.mp3'
import Combo_18 from '../../assets/combos/combo_18.mp3'
import Combo_19 from '../../assets/combos/combo_19.mp3'
import Combo_20 from '../../assets/combos/combo_20.mp3'

interface TComboType {
  name: string
  combination: string[]
}

const FightCard = () => {
  const { css } = useFela()
  const combos = useSelector((state: any) => state.combo)

  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(5)
  const [combo, setCombo] = useState<TComboType | null>(null)

  const grabComboAudio = () => {
    if (combo) {
      switch (combo.name) {
        case 'combo_1':
          return Combo_1
          break
        case 'combo_2':
          return Combo_2
          break
        case 'combo_3':
          return Combo_3
          break
        case 'combo_4':
          return Combo_4
          break
        case 'combo_5':
          return Combo_5
          break
        case 'combo_6':
          return Combo_6
          break
        case 'combo_7':
          return Combo_7
          break
        case 'combo_8':
          return Combo_8
          break
        case 'combo_9':
          return Combo_9
          break
        case 'combo_10':
          return Combo_10
          break
        case 'combo_11':
          return Combo_11
          break
        case 'combo_12':
          return Combo_12
          break
        case 'combo_13':
          return Combo_13
          break
        case 'combo_14':
          return Combo_14
          break
        case 'combo_15':
          return Combo_15
          break
        case 'combo_16':
          return Combo_16
          break
        case 'combo_17':
          return Combo_17
          break
        case 'combo_18':
          return Combo_18
          break
        case 'combo_19':
          return Combo_19
          break
        case 'combo_20':
          return Combo_20
          break
        default:
          break
      }
    }
  }
  const sound = new Howl({
    src: grabComboAudio()
  })

  useEffect(() => {
    isDrilling && sound.play()
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
    const pickedRandomCombo = combos[Math.floor(Math.random() * 21)]
    seconds === 0 && setCombo(pickedRandomCombo)
    seconds === 0 && setSeconds(5)
  }, [seconds])

  useEffect(() => {
    const pickedRandomCombo = combos[Math.floor(Math.random() * 21)]
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
    <div
      className={css({
        width: '400px',
        height: '500px',
        background: '#F7F7FF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
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
          variant='outlined'
          aria-label='Decrement value'
          onClick={() => setIsDrilling(false)}
        >
          Stop
        </Button>
      </div>
    </div>
  )
}

export default FightCard
