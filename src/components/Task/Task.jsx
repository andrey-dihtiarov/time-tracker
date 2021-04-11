import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { CardActions, CardContent } from '@material-ui/core'

import { formatTime } from '../../utils/timeHelper'
import { ROUTE_LOG, ROUTE_NOT_FOUND } from '../../constants/routes'

import { Button } from '../Button'

import { Label, Value, Card, Typography, Wrapper } from './Task.styles'

const Task = () => {
  const history = useHistory()
  const { id } = useParams()
  const task = useSelector((state) => state.task.tasks[id - 1])

  return (
    <>
      {!task ? (
        <Redirect to={ROUTE_NOT_FOUND} />
      ) : (
        <Wrapper>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Label>Task №:</Label>
                <Value>{id}</Value>
              </Typography>
              <Typography>
                <Label>Task Name:</Label>
                <Value>{task.name}</Value>
              </Typography>
              <Typography>
                <Label>Task Started:</Label>
                <Value>{formatTime(task.timeStarted)}</Value>
              </Typography>
              <Typography>
                <Label>Task Ended:</Label>
                <Value>{formatTime(task.timeEnded)}</Value>
              </Typography>
              <Typography>
                <Label>Task Total:</Label>
                <Value>{formatTime(task.timeEnded - task.timeStarted)}</Value>
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => history.push(ROUTE_LOG)}>Back</Button>
            </CardActions>
          </Card>
        </Wrapper>
      )}
    </>
  )
}

// Task.propTypes = {
//   task: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     timeStarted: PropTypes.number.isRequired,
//     timeEnded: PropTypes.number.isRequired,
//   }).isRequired,
// }

export default Task
