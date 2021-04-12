import React, { useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
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

const BAR_SIZE = 20
const DOMAIN = [0, 60]
const CONTAINER_SIZES = {
  width: '100%',
  height: 300,
}

const Chart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { tasks } = useSelector((state) => state.task)

  const dispatch = useDispatch()

  const chartData = useMemo(() => mapTasksForChart(tasks), [tasks])

  const onModalAgreement = () => {
    const newTasks = generateNewTasks()
    dispatch(addGeneratedTasks(newTasks))
    setIsModalOpen(false)
  }

  const onModalClose = () => setIsModalOpen(false)

  const onGenerateClick = () => setIsModalOpen(true)

  return (
    <>
      <ResponsiveContainer width={CONTAINER_SIZES.width} height={CONTAINER_SIZES.height}>
        <BarChart data={chartData}>
          <Tooltip />
          <Legend />
          <CartesianGrid stroke={colors.whiteSmoke} />
          <XAxis dataKey="name" />
          <YAxis domain={DOMAIN} />
          <Bar
            dataKey="minutes"
            name="Minutes in hour"
            barSize={BAR_SIZE}
            fill={colors.freeSpeechBlue}
          />
        </BarChart>
      </ResponsiveContainer>
      <Wrapper>
        <Button onClick={onGenerateClick}>Generate</Button>
      </Wrapper>
      <Modal
        message="Are you sure you want to generate new tasks? All previous tasks will be erased!"
        isOpened={isModalOpen}
        onClose={onModalClose}
        title="All previous tasks will be erased"
        onSuccess={onModalAgreement}
        showAgreementButton
      />
    </>
  )
}

export default Chart
