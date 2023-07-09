import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useFela } from 'react-fela'

import Button from '@mui/material/Button'

interface TComboType {
  name: string
  combination: string[]
}

const Practice = () => {
  const { css } = useFela()
  const combos = useSelector((state: any) => state.combo)

  const data = {
    john: {
      name: 'John',
      position: 'Developer'
    },
    jane: {
      name: 'Jane',
      position: 'Designer'
    }
  }

  const [users, setUsers] = useState<{ [name: string]: { name: string; position: string } }>(data)
  const [position, setPosition] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    if (position && name) {
      setName('')
      setPosition('')
    }
  }, [users])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form
        action='submit'
        onSubmit={(e) => {
          e.preventDefault()
          setUsers({
            ...users,
            [name]: {
              name,
              position
            }
          })
        }}
      >
        <input
          type='text'
          placeholder='position'
          value={position}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPosition(e.target.value)
          }}
        />
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
          }}
        />
        <button type='submit'>ENTER</button>
      </form>
      <div>
        {Object.entries(users).map(([key, user]) => (
          <div key={key}>
            Name: {user.name}, Position: {user.position}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Practice
