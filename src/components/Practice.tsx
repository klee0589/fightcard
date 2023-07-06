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

  const data: { name: string; position: string }[] = [
    {
      name: 'john',
      position: 'HR'
    }
  ]

  const [users, setUsers] = useState<{ name: string; position: string }[]>(data)
  const [position, setPosition] = useState<string>('position')
  const [name, setName] = useState<string>('name')

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <form
        action='submit'
        onSubmit={(e) => {
          e.preventDefault()
          setUsers([
            ...users,
            {
              name,
              position
            }
          ])
          setName('name')
          setPosition('name')
        }}
      >
        <input
          type='text'
          placeholder={position}
          onChange={(e: any) => {
            e.preventDefault()
            setPosition(e.target.value)
          }}
        />
        <input
          type='text'
          placeholder={name}
          onChange={(e: any) => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
        <button type='submit'>ENTER</button>
      </form>
      <div>
        {users.map((user: any) => {
          return (
            <div key={user.name}>
              {user.name}
              {user.position}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Practice
