import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

import { MainPage } from '../pages'
import { NotFoundPage } from '../pages/NotFoundPage'
import { TaskPage } from '../pages/TaskPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route exact path={ROUTES.ROUTE_TASK} component={TaskPage} />
        <Route
          exact
          path={[ROUTES.ROUTE_HOME, ROUTES.ROUTE_LOG, ROUTES.ROUTE_CHART]}
          component={MainPage}
        />
        <Route exact path={ROUTES.ROUTE_NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </Switch>
  </BrowserRouter>
)

export default Routes
