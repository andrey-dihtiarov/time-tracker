import moment from 'moment';
import { v4 as uuid } from 'uuid';

import { MINUTE, TASK_DURATION, TASKS_AMOUNT } from '../constants/general';

export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const getRandomTime = () => getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.MAX) * MINUTE;

export const getRandomTimeAfterPreviousTask = () =>
  getRandomNumber(TASK_DURATION.MIN, TASK_DURATION.AVERAGE) * MINUTE;

export const getEmptyChartColumns = () => {
  const numberOfHours = 24;
  return Array.from({ length: numberOfHours }).map((item, index) => ({ name: index, minutes: 0 }));
};

export const mapTaskByHours = (tasks) =>
  tasks.map((task) => ({
    startTime: task.timeStarted,
    endTime: task.timeEnded,
    startHour: Number(moment(task.timeStarted).format('H')),
    startMin: Number(moment(task.timeStarted).format('m')),
    endHour: Number(moment(task.timeEnded).format('H')),
    endMin: Number(moment(task.timeEnded).format('m')),
  }));

export const calculateMinsSpent = (minsSpent, subValue) => {
  if (minsSpent < 0) {
    return 0;
  }
  const subtracted = minsSpent - subValue;
  if (subtracted < 0) {
    return 0;
  }
  return subtracted;
};

export const mapTasksForChart = (tasks) => {
  const chartData = getEmptyChartColumns();
  const newChartData = [...chartData];
  const minutesInHour = 60;
  const tasksByHours = mapTaskByHours(tasks);

  chartData.forEach((hour) => {
    const { name: startHour } = hour;

    tasksByHours
      .filter((task) => task.startHour === startHour)
      .forEach((task) => {
        const hoursDiff = task.endHour - task.startHour;

        if (hoursDiff > 0) {
          let minutesSpent = moment(task.endTime).diff(moment(task.startTime), 'minutes');
          newChartData[startHour].minutes += minutesInHour - task.startMin;
          minutesSpent = calculateMinsSpent(minutesSpent, minutesInHour - task.startMin);

          Array.from({ length: hoursDiff })
            .map((item, index) => index + 1)
            .forEach((h) => {
              const nextHour = startHour + h;

              if (minutesSpent < minutesInHour) {
                newChartData[nextHour].minutes += minutesSpent;
                minutesSpent = calculateMinsSpent(minutesSpent, minutesSpent);
              } else {
                newChartData[nextHour].minutes += minutesInHour;
                minutesSpent = calculateMinsSpent(minutesSpent, minutesInHour);
              }
            });
        } else {
          newChartData[startHour].minutes += task.endMin - task.startMin;
        }
      });
  });

  return newChartData;
};

export const generateNewTasks = () => {
  const date = new Date();
  const amountTasks = getRandomNumber(TASKS_AMOUNT.MIN, TASKS_AMOUNT.MAX);
  const newTasks = [];
  const dateInMS = Number(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime());

  Array.from({ length: amountTasks })
    .map((item, index) => index)
    .forEach((item) => {
      const randomTime = getRandomTime();
      let timeStarted;
      if (!newTasks.length) {
        timeStarted = dateInMS;
      } else {
        timeStarted = newTasks[item - 1].timeEnded + getRandomTimeAfterPreviousTask();
      }
      const timeEnded = randomTime + timeStarted;
      const name = `Task-${item + 1}`;
      const id = uuid();

      newTasks.push({
        id,
        name,
        timeStarted,
        timeEnded,
      });
    });

  return newTasks;
};
