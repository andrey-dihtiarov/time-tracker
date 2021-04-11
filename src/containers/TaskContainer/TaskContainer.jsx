import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { Tab, Tabs } from '@material-ui/core'

import { colors } from '../../constants/colors'
import * as ROUTES from '../../constants/routes'

import { Table } from '../../components'

import { Wrapper } from './TaskContainer.styles'

const Chart = () => <div>Chart</div>

const TaskContainer = () => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState(0)

  const onTabChange = (event, value) => {
    setActiveTab(value)
    if (value === 1) {
      return history.push(ROUTES.ROUTE_CHART)
    }
    return history.push(ROUTES.ROUTE_LOG)
  }

  return (
    <Wrapper>
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        style={{ backgroundColor: colors.irisBlue }}
        centered
      >
        <Tab label="Tasks Log" fullWidth style={{ minWidth: '50%' }} />
        <Tab label="Tasks Chart" fullWidth style={{ minWidth: '50%' }} />
      </Tabs>
      <Switch>
        <Route path={ROUTES.ROUTE_LOG} component={Table} />
        <Route path={ROUTES.ROUTE_CHART} component={Chart} />
        <Route component={Table} />
      </Switch>
    </Wrapper>
  )
}

export default TaskContainer
