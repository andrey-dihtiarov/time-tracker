import React, { useEffect, useMemo } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useSelector } from 'react-redux'

import { colors } from '../../constants/colors'
import { mapTasksForChart } from '../../utils/chartsHelper'

const Chart = () => {
  const { tasks } = useSelector((state) => state.task)

  useEffect(() => {}, [])

  const chartData = useMemo(() => mapTasksForChart(tasks), [tasks])

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <Tooltip />
          <Legend />
          <CartesianGrid stroke={colors.whiteSmoke} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 60]} />
          <Bar dataKey="minutes" name="Minutes in hour" barSize={20} fill={colors.freeSpeechBlue} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
