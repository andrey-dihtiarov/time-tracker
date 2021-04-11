import React, { useMemo, useState } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'

import { colors } from '../../constants/colors'
import { generateNewTasks, mapTasksForChart } from '../../utils/chartsHelper'
import { addGeneratedTasks } from '../../store/task'

import { Button } from '../Button'
import { Modal } from '../Modal'

import { Wrapper } from './Chart.styles'

const Chart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { tasks } = useSelector((state) => state.task)

  const dispatch = useDispatch()

  const chartData = useMemo(() => mapTasksForChart(tasks), [tasks])

  const onGenerateClick = () => {
    const newTasks = generateNewTasks()
    dispatch(addGeneratedTasks(newTasks))
    setIsModalOpen(false)
  }

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
      <Wrapper>
        <Button onClick={() => setIsModalOpen(true)}>Generate</Button>
      </Wrapper>
      <Modal
        message="Are you sure you want to generate new tasks? All previous tasks will be erased!"
        isOpened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="All previous tasks will be erased"
        onSuccess={onGenerateClick}
        showAgreementButton
      />
    </>
  )
}

export default Chart
