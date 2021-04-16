import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table as TaskTable,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { deleteTask } from '../../store/task';
import { formatTime } from '../../utils/timeHelper';
import { ROUTE_TASK } from '../../constants/routes';

import { Button } from '../Button';
import { Modal } from '../Modal';

import { BodyTableCell, HeadTableCell, BodyTableRow, NoTasks } from './Table.styles';

const TABLE_HEADERS = ['№', 'Task name', 'Task start', 'Task end', 'Task spent', 'Info', 'Delete'];

const Table = () => {
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const onModalSuccess = () => {
    if (deleteTaskId) {
      dispatch(deleteTask(deleteTaskId));
    }
    setDeleteTaskId(null);
    setIsModalOpen(false);
  };

  const openAlertModal = (taskId) => {
    setDeleteTaskId(taskId);
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setDeleteTaskId(null);
    setIsModalOpen(false);
  };

  const onDeleteClick = (taskId) => () => openAlertModal(taskId);

  return (
    <>
      {!tasks.length ? (
        <NoTasks>There are no tasks yet!</NoTasks>
      ) : (
        <TableContainer>
          <TaskTable>
            <TableHead>
              <TableRow>
                {TABLE_HEADERS.map((header) => (
                  <HeadTableCell key={header}>{header}</HeadTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <BodyTableRow key={task.id}>
                  <BodyTableCell>{index + 1}</BodyTableCell>
                  <BodyTableCell>{task.name}</BodyTableCell>
                  <BodyTableCell>{formatTime(task.timeStarted)}</BodyTableCell>
                  <BodyTableCell>{formatTime(task.timeEnded)}</BodyTableCell>
                  <BodyTableCell>
                    {formatTime(task.timeEnded - task.timeStarted, false)}
                  </BodyTableCell>
                  <BodyTableCell>
                    <Button component={Link} to={ROUTE_TASK.replace(':id', task.id)}>
                      Info
                    </Button>
                  </BodyTableCell>
                  <BodyTableCell>
                    <Button onClick={onDeleteClick(task.id)}>Delete</Button>
                  </BodyTableCell>
                </BodyTableRow>
              ))}
            </TableBody>
          </TaskTable>
        </TableContainer>
      )}
      <Modal
        message="You are trying to delete the task! Are you sure you want to delete it?"
        isOpened={isModalOpen}
        onClose={onModalClose}
        title="Delete the task"
        onSuccess={onModalSuccess}
        showAgreementButton
      />
    </>
  );
};

export default Table;
