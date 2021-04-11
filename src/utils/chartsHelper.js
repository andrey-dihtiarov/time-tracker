import moment from 'moment'
import { MINUTE, TASK_DURATION, TASKS_AMOUNT } from '../constants/general'

export const getEmptyChartColumns = () => {
  const numberOfHours = 24
  return Array(numberOfHours)
    .fill('')
    .map((item, index) => ({ name: index, minutes: 0 }))
}

export const mapTaskByHours = (tasks) =>
  tasks.map((task) => ({
    startTime: task.timeStarted,
    endTime: task.timeEnded,
    startHour: Number(moment(task.timeStarted).format('H')),
    startMin: Number(moment(task.timeStarted).format('m')),
    endHour: Number(moment(task.timeEnded).format('H')),
    endMin: Number(moment(task.timeEnded).format('m')),
  }))

export const mapTasksForChart = (tasks) => {
  const chartData = getEmptyChartColumns()
  const newChartData = [...chartData]
  const minsInHour = 60
  const tasksByHours = mapTaskByHours(tasks)

  newChartData.forEach((hour) => {
    const { name: startHour } = hour

    tasksByHours
      .filter((task) => task.startHour === startHour)
      .forEach((task) => {
        const hoursDiff = task.endHour - task.startHour

        if (hoursDiff > 0) {
          let minsSpent = moment(task.endTime).diff(moment(task.startTime), 'minutes')
          newChartData[startHour].minutes += minsInHour - task.startMin
          minsSpent -= minsInHour - task.startMin

          const hoursDiffArray = Array(hoursDiff)
            .fill('')
            .map((item, index) => index + 1)

          hoursDiffArray.forEach((h) => {
            const nextHour = startHour + h

            if (minsSpent < minsInHour) {
              newChartData[nextHour].minutes += minsSpent
              minsSpent -= minsSpent
            } else {
              newChartData[nextHour].minutes += minsInHour
              minsSpent -= minsInHour
            }
          })
        } else {
          newChartData[startHour].minutes += task.endMin - task.startMin
        }
      })
  })

  return newChartData
}

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

const getRandomTime = () => getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.MAX) * MINUTE

const getRandomTimeAfterPreviousTask = () =>
  getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.AVERAGE) * MINUTE

export const generateNewTasks = () => {
  const date = new Date()
  const amountTasks = getRandomNumber(TASKS_AMOUNT.MIN, TASKS_AMOUNT.MAX)
  const newTasks = []
  const dateInMS = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime())

  const amountTasksArray = Array(amountTasks)
    .fill('')
    .map((item, index) => index)

  amountTasksArray.forEach((item) => {
    const randomTime = getRandomTime()
    let timeStarted
    if (!newTasks.length) {
      timeStarted = dateInMS
    } else {
      timeStarted = newTasks[item - 1].timeEnded + getRandomTimeAfterPreviousTask()
    }
    const timeEnded = randomTime + timeStarted
    const name = `Task-${item + 1}`
    const id = `${name}-${timeStarted}`

    newTasks.push({
      id,
      name,
      timeStarted,
      timeEnded,
    })
  })

  return newTasks
}
