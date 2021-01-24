import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Wrapper = styled.div`
  margin: 50px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  margin: 14px;
  padding: 6px;
  right: 0;
  top: 0;
  z-index: 100;
`;
