import React from 'react'
import { Container } from '@material-ui/core'

import { Timer } from '../../components'
import { TaskContainer } from '../../containers'

const MainPage = () => (
  <Container>
    <Timer />
    <TaskContainer />
  </Container>
)

export default MainPage
