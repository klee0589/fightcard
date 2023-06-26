import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

import { decrement, increment } from '../../../state/combos/comboSlice'

import { Howl, Howler } from 'howler'

import Audio from '../../../assets/combos.mp3'

const FightCard = () => {
  const { css } = useFela()
  const combos = useSelector((state: any) => state.combo)
  // const dispatch = useDispatch()
  // const [sports, setSports]: any = useState([])
  // const [data, setData]: any = useState(null)
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
  //     const users = response.data
  //     setData({ users })
  //   })
  // }, [])

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       'X-RapidAPI-Key': '4CAmq0xDZ3mshfMBzPhg3nXFdwbPp1iAulFjsndyLDYEjyHWws',
  //       'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  //     }
  //   }
  //   axios.get(`https://odds.p.rapidapi.com/v4/sports`, config).then((response) => {
  //     const sports = response.data
  //     setSports({ sports })
  //   })
  // }, [])

  const sound = new Howl({
    src: Audio,
    sprite: {
      jab: [4000, 800],
      cross: [5000, 800]
    }
  })

  const [isDrilling, setIsDrilling] = useState(false)

  const [seconds, setSeconds] = useState(5)
  const [combo, setCombo]: any = useState()

  useEffect(() => {
    isDrilling && sound.play('jab')
  }, [combo, isDrilling])

  useEffect(() => {
    if (seconds > 0 && isDrilling) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearTimeout(timerId) // This is to clear the timer if the component unmounts before the countdown finishes.
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

  return (
    <Card
      className={css({
        padding: 10,
        fontSize: '20px',
        background: 'green',
        color: 'darkblue',
        ':hover': {
          color: 'blue'
        }
      })}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color='text.secondary' gutterBottom>
            {seconds}
          </Typography>
          <div>{combo && combo.name}</div>
          <div>{combo && combo.combination}</div>
          <div>
            <Button variant='contained' aria-label='Increment value' onClick={() => setIsDrilling(true)}>
              Start
            </Button>
            <Button variant='contained' aria-label='Decrement value' onClick={() => setIsDrilling(false)}>
              Stop
            </Button>
          </div>
        </CardContent>
      </Card>
    </Card>
  )
}

export default FightCard
