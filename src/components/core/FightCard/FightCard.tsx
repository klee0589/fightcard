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

const FightCard = () => {
  const { css } = useFela()
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  const [sports, setSports]: any = useState([])
  const [data, setData]: any = useState(null)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      const users = response.data
      setData({ users })
    })
  }, [])

  useEffect(() => {
    const config = {
      headers: {
        'X-RapidAPI-Key': '4CAmq0xDZ3mshfMBzPhg3nXFdwbPp1iAulFjsndyLDYEjyHWws',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com'
      }
    }
    axios.get(`https://odds.p.rapidapi.com/v4/sports`, config).then((response) => {
      const sports = response.data
      setSports({ sports })
    })
  }, [])

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div
      className={css({
        padding: 10,
        fontSize: '20px',
        color: 'darkblue',
        ':hover': {
          color: 'blue'
        }
      })}
    >
      HERE IT IS
      {/* <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Added
          </Typography>
          <div>
            <Button variant='contained' aria-label='Increment value' onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <span>{count}</span>
            <Button variant='contained' aria-label='Decrement value' onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
          </div>
        </CardContent>
      </Card>
      <List>
        {sports.sports &&
          sports.sports.map((item: any) => {
            return (
              <ListItem disablePadding key={item.key}>
                <ListItemButton>{item.title}</ListItemButton>
              </ListItem>
            )
          })}
      </List> */}
    </div>
  )
}

export default FightCard
