import React from 'react';

import { ROUTE_HOME } from '../../constants/routes';

import { Wrapper, Link } from './NotFound.styles';

const NotFound = () => (
  <Wrapper>
    Sorry, it seems like page does not exists.<Link to={ROUTE_HOME}>Go to home page</Link>
  </Wrapper>
);

export default NotFound;
