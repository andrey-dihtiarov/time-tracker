import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { colors } from '../../constants/colors';

import { Button } from '../Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Button} {
    margin-top: 20px;
  }
`;

export const TaskNameInput = styled(TextField)`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  & .MuiInputBase-root {
    justify-content: center;
    color: ${colors.freeSpeechBlue};
    font-size: 14px;
    font-weight: bold;
    width: 260px;
    & .MuiInputBase-input {
      text-align: center;
    }
  }
`;
