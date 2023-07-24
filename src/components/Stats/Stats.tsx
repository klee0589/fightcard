import React from 'react'

import { useFela } from 'react-fela'
import { useSelector } from 'react-redux'

import { cardContainer } from './styles'

import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts'
import { colors, TColor } from '../../palette'

const Stats = ({ isDrilling }: { isDrilling: boolean }) => {
  const { css } = useFela()

  const stats = useSelector((state: any) => state.stats)

  const COLORS = [colors.teal, colors.mint_green, colors.coral, colors.mustard, colors.lavender, colors.slate_gray, colors.turquoise]

  const data: { name: string; value: number }[] = [
    { name: 'Jab', value: stats['jab'].count },
    { name: 'Cross', value: stats['cross'].count },
    { name: 'L Hook', value: stats['lHook'].count },
    { name: 'R Hook', value: stats['rHook'].count },
    { name: 'L Uppercut', value: stats['lUppercut'].count },
    { name: 'R Uppercut', value: stats['rUppercut'].count },
    { name: 'R Overhand', value: stats['rOverhand'].count }
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
