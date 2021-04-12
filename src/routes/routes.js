import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

import { MainPage, NotFoundPage, TaskPage } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route exact path={ROUTES.ROUTE_TASK} component={TaskPage} />
        <Route
          exact
          path={[ROUTES.ROUTE_ROOT, ROUTES.ROUTE_HOME, ROUTES.ROUTE_LOG, ROUTES.ROUTE_CHART]}
          component={MainPage}
        />
        <Route exact path={ROUTES.ROUTE_NOT_FOUND} component={NotFoundPage} />
        <Redirect to={ROUTES.ROUTE_NOT_FOUND} />
      </Switch>
    </Switch>
  </BrowserRouter>
)

export default Routes
