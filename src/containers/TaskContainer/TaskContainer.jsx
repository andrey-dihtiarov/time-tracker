import React, { useMemo } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import { Table, Chart } from '../../components';

import { Wrapper, Tabs, Tab } from './TaskContainer.styles';

const TABS = {
  logTab: 0,
  chartTab: 1,
};

const TaskContainer = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const activeTab = useMemo(() => (pathname === ROUTES.ROUTE_CHART ? TABS.chartTab : TABS.logTab), [
    pathname,
  ]);

  const onTabChange = (event, value) =>
    value === TABS.chartTab ? history.push(ROUTES.ROUTE_CHART) : history.push(ROUTES.ROUTE_LOG);

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
  );
};

export default TaskContainer;
