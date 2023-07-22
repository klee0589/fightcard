import React from 'react'

import { useFela } from 'react-fela'

import { cardContainer } from './styles'

import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const Stats = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  return (
    <div className={css(cardContainer(isDrilling))}>
      <div>
        <h1>Stats</h1>
        <ResponsiveContainer width={700} height='80%'>
          <PieChart width={730} height={250}>
            <Legend verticalAlign='top' height={36} />
            <Pie data={data} dataKey='value' nameKey='name' cx='50%' cy='50%' innerRadius={60} outerRadius={80} fill='#82ca9d' label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Stats
