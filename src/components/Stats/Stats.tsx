import React from 'react'

import { useFela } from 'react-fela'

import { cardContainer } from './styles'

import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#3C486B', '#EF6262']

const Stats = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  const data = [
    { name: 'Jab', value: 0 },
    { name: 'Cross', value: 0 },
    { name: 'L Hook', value: 0 },
    { name: 'R Hook', value: 0 },
    { name: 'L Uppercut', value: 0 },
    { name: 'R Uppercut', value: 0 }
  ]

  return (
    <div className={css(cardContainer(isDrilling))}>
      <div>
        <h1>Stats</h1>
        <ResponsiveContainer width={400} height='80%'>
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
