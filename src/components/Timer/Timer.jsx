import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startTimer, setTaskName, stopTimer } from '../../store/timer'
import { addTask } from '../../store/task'
import { formatTime, getCurrentTime } from '../../utils/timeHelper'
import { colors } from '../../constants/colors'

import { ClockFace } from '../ClockFace'
import Button from '../Button/Button'

import { Modal } from '../Modal'

import { Wrapper, TaskNameInput } from './Timer.styles'

const Timer = () => {
  const [time, setTime] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { name, timeStarted } = useSelector((state) => state.timer)
  const dispatch = useDispatch()

  const timerTick = useCallback(
    () =>
      setInterval(() => {
        setTime((t) => t + 1000)
      }, 1000),
    [],
  )

  const timer = useMemo(() => formatTime(time), [time])

  useEffect(() => {
    let tick
    if (timeStarted) {
      setTime(getCurrentTime() - timeStarted)
      tick = timerTick()
    } else {
      setTime(timeStarted)
    }
    return () => {
      clearInterval(tick)
    }
  }, [timeStarted, timerTick])

  const onStartButtonClick = () => {
    if (timeStarted) {
      if (!name) {
        return setIsModalOpen(true)
      }
      dispatch(
        addTask({
          id: `${name}-${timeStarted}`,
          timeStarted,
          name,
          timeEnded: getCurrentTime(),
        }),
      )
      return dispatch(stopTimer())
    }
    return dispatch(startTimer(getCurrentTime()))
  }

  const onTaskNameChange = (event) => dispatch(setTaskName(event.target.value))

  return (
    <>
      <Wrapper>
        <TaskNameInput
          placeholder="Enter your task name"
          onChange={onTaskNameChange}
          value={name}
          inputProps={{ style: { textAlign: 'center', color: colors.freeSpeechBlue } }}
        />
        <ClockFace>{timer}</ClockFace>
        <Button onClick={onStartButtonClick}>{timeStarted ? 'STOP' : 'START'}</Button>
      </Wrapper>
      <Modal
        message="You are trying to close your task without a name, enter the title and try again!"
        isOpened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Empty task name"
        onSuccess={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Timer
