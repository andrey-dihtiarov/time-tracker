import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export const Link = styled(RouterLink)`
  color: ${colors.freeSpeechBlue};
`;
