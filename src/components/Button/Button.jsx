import styled from 'styled-components';
import { Button as MUIButton } from '@material-ui/core';

import { colors } from '../../constants/colors';

const Button = styled(MUIButton)`
  box-shadow: 0 0 4px 0 ${colors.silver};
  color: ${colors.freeSpeechBlue};
  background-color: ${colors.white};
  font-weight: bold;
`;

export default Button;
