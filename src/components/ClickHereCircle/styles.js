import styled, { css, keyframes } from 'styled-components';
import { Relative } from 'theme/grid';

const expand = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const Circle = styled(Relative)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  pointer-events: none;
`;

export const InnerCircle = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  ${({ color }) => color ? css`background-color: ${color};` : null}

  animation: ${expand} 2s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 1s;
  }
`;
