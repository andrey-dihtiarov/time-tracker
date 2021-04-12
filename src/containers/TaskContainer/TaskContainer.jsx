import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import { Table, Chart } from '../../components'

import { Wrapper, Tabs, Tab } from './TaskContainer.styles'

const TABS = {
  logTab: 0,
  chartTab: 1,
}

const TaskContainer = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  const getActiveTab = useCallback(() => {
    if (pathname === ROUTES.ROUTE_LOG) {
      return TABS.logTab
    }
    if (pathname === ROUTES.ROUTE_CHART) {
      return TABS.chartTab
    }
    return TABS.logTab
  }, [pathname])

  const initActiveTab = useMemo(() => getActiveTab(), [getActiveTab])

  const [activeTab, setActiveTab] = useState(initActiveTab)

  useEffect(() => {
    const currentTab = getActiveTab()
    setActiveTab(currentTab)
  }, [getActiveTab])

  const onTabChange = (event, value) => {
    if (value === TABS.chartTab) {
      return history.push(ROUTES.ROUTE_CHART)
    }
    return history.push(ROUTES.ROUTE_LOG)
  }

  return (
    <Wrapper>
      <Tabs value={activeTab} onChange={onTabChange} centered>
        <Tab label="Tasks Log" fullWidth />
        <Tab label="Tasks Chart" fullWidth />
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
