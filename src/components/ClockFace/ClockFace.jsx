import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Label } from './ClockFace.styles'

const ClockFace = ({ children }) => (
  <Wrapper>
    <Label disabled value={children} />
  </Wrapper>
)

ClockFace.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ClockFace
