import React from 'react'

import { useFela } from 'react-fela'

import { cardContainer } from './styles'

import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

const data = [
  { name: 'food', uv: -2000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 }
]
const Stats = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  return (
    <div className={css(cardContainer(isDrilling))}>
      <div>
        <h1>Stats</h1>
        <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey='name' />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0} />
          <Line type='monotone' dataKey='pv' stroke='#387908' yAxisId={1} />
        </LineChart>
      </div>
    </div>
  )
}

export default Stats
