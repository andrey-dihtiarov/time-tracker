import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Table as TaskTable,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core'

import { deleteTask } from '../../store/task'
import { formatTime } from '../../utils/timeHelper'
import { ROUTE_TASK } from '../../constants/routes'

import { Button } from '../Button'
import { Modal } from '../Modal'

import { BodyTableCell, HeadTableCell, BodyTableRow } from './Table.styles'

const Table = () => {
  const [deleteTaskId, setDeleteTaskId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()
  const { tasks } = useSelector((state) => state.task)
  const dispatch = useDispatch()

  const onModalSuccess = () => {
    if (deleteTaskId) {
      dispatch(deleteTask(deleteTaskId))
    }
    setDeleteTaskId(null)
    setIsModalOpen(false)
  }

  const openAlertModal = (taskId) => {
    setDeleteTaskId(taskId)
    setIsModalOpen(true)
  }

  const onModalClose = () => {
    setDeleteTaskId(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <TableContainer>
        <TaskTable>
          <TableHead>
            <TableRow>
              <HeadTableCell>№</HeadTableCell>
              <HeadTableCell>Task</HeadTableCell>
              <HeadTableCell>Time start</HeadTableCell>
              <HeadTableCell>Time end</HeadTableCell>
              <HeadTableCell>Time spend</HeadTableCell>
              <HeadTableCell>Info</HeadTableCell>
              <HeadTableCell>Delete</HeadTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <BodyTableRow key={task.id}>
                <BodyTableCell>{index + 1}</BodyTableCell>
                <BodyTableCell>{task.name}</BodyTableCell>
                <BodyTableCell>{formatTime(task.timeStarted)}</BodyTableCell>
                <BodyTableCell>{formatTime(task.timeEnded)}</BodyTableCell>
                <BodyTableCell>{formatTime(task.timeEnded - task.timeStarted)}</BodyTableCell>
                <BodyTableCell>
                  <Button onClick={() => history.push(ROUTE_TASK.replace(':id', index + 1))}>
                    Info
                  </Button>
                </BodyTableCell>
                <BodyTableCell>
                  <Button onClick={() => openAlertModal(task.id)}>Delete</Button>
                </BodyTableCell>
              </BodyTableRow>
            ))}
          </TableBody>
        </TaskTable>
      </TableContainer>
      <Modal
        message="You are trying to close your task without a name, enter the title and try again!"
        isOpened={isModalOpen}
        onClose={onModalClose}
        title="Empty task name"
        onSuccess={onModalSuccess}
        showAgreementButton
      />
    </>
  )
}

export default Table
