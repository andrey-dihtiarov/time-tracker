import styled from 'styled-components'
import { Card as MUICard, Typography as MUITypography } from '@material-ui/core'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Label = styled.span`
  font-weight: bold;
`

export const Value = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Card = styled(MUICard)`
  width: 720px;
`

export const Typography = styled(MUITypography)`
  display: flex;
  justify-content: space-between;
  //overflow: hidden;
  //white-space: nowrap;
`
