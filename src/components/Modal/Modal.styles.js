import styled from 'styled-components'
import { DialogTitle as MUIDialogTitle, Button as MUIButton } from '@material-ui/core'
import { colors } from '../../constants/colors'

export const DialogTitle = styled(MUIDialogTitle)`
  color: ${colors.jazzberryJam};
  font-weight: bold;
`

export const CloseButton = styled(MUIButton)`
  color: ${colors.irisBlue};
`

export const AgreementButton = styled(MUIButton)`
  color: ${colors.jazzberryJam};
`
