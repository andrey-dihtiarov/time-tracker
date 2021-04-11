import styled from 'styled-components'
import { TableCell, TableRow } from '@material-ui/core'
import { colors as color, colors } from '../../constants/colors'

export const Wrapper = styled.div``

export const HeadTableCell = styled(TableCell)`
  color: ${colors.darkGray};
  font-weight: bold;
`

export const BodyTableCell = styled(TableCell)`
  color: ${colors.freeSpeechBlue};
  font-weight: bold;
`

export const BodyTableRow = styled(TableRow)`
  background-color: ${color.aliceBlue};
`
