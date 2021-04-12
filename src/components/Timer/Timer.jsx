import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { startTimer, setTaskName, stopTimer } from '../../store/timer';
import { addTask } from '../../store/task';
import { formatTime, getCurrentTime } from '../../utils/timeHelper';

import { ClockFace } from '../ClockFace';
import Button from '../Button/Button';

import { Modal } from '../Modal';

import { Wrapper, TaskNameInput } from './Timer.styles';

const SECOND = 1000;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, timeStarted } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  const timerTick = useCallback(
    () =>
      setInterval(() => {
        setTime((t) => t + SECOND);
      }, SECOND),
    [],
  );

  const timer = useMemo(() => formatTime(time, false), [time]);

  useEffect(() => {
    let tick;
    const timePassed = getCurrentTime() - timeStarted;
    if (timeStarted) {
      setTime(timePassed);
      tick = timerTick();
    } else {
      setTime(timeStarted);
    }
    return () => {
      clearInterval(tick);
    };
  }, [timeStarted, timerTick]);

  const onStartButtonClick = () => {
    if (timeStarted) {
      if (!name) {
        return setIsModalOpen(true);
      }
      dispatch(
        addTask({
          id: uuid(),
          timeStarted,
          name,
          timeEnded: getCurrentTime(),
        }),
      );
      return dispatch(stopTimer());
    }
    return dispatch(startTimer(getCurrentTime()));
  };

  const onTaskNameChange = (event) => dispatch(setTaskName(event.target.value));

  const onModalClose = () => setIsModalOpen(false);

  return (
    <>
      <Wrapper>
        <TaskNameInput
          placeholder="Enter your task name"
          onChange={onTaskNameChange}
          value={name}
        />
        <ClockFace>{timer}</ClockFace>
        <Button onClick={onStartButtonClick}>{timeStarted ? 'STOP' : 'START'}</Button>
      </Wrapper>
      <Modal
        message="You are trying to close your task without a name, enter the title and try again!"
        isOpened={isModalOpen}
        onClose={onModalClose}
        title="Empty task name"
        onSuccess={onModalClose}
      />
    </>
  );
};

export default Timer;
