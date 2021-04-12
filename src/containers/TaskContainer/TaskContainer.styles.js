import styled from 'styled-components'
import { Tab as MUITab, Tabs as MUITabs } from '@material-ui/core'

import { colors } from '../../constants/colors'

export const Wrapper = styled.div`
  margin-top: 20px;
  color: ${colors.white};
`

export const Tabs = styled(MUITabs)`
  background-color: ${colors.irisBlue};
`

export const Tab = styled(MUITab)`
  min-width: 50%;
`
