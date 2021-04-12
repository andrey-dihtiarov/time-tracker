import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0 2px 5px 1px ${colors.silver};
  border-radius: 50%;
`;

export const Label = styled.input`
  font-size: 30px;
  min-width: 160px;
  max-width: 160px;
  display: flex;
  justify-content: center;
  border: none;
  background-color: transparent;
  text-align: center;
  &:disabled {
    color: ${colors.freeSpeechBlue};
  }
`;
