import styled, { css } from 'styled-components';
import { color3, color4 } from '../../theme/variables';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${color4};
  z-index: 97;
`;

export const Headline = styled.h1`
  color: ${color3};
`;

export const AbsoluteText = styled.p`
  position: absolute;
  ${({ top }) => top ? css`
    top: ${top};
  ` : ''}
  ${({ bottom }) => bottom ? css`
    bottom: ${bottom};
  ` : ''}
  ${({ left }) => left ? css`
    left: ${left};
  ` : ''}
  ${({ right }) => right ? css`
    right: ${right};
  ` : ''}
  ${({ fontSize }) => fontSize ? css`
    font-size: ${fontSize};
  ` : ''}
  ${({ margin }) => margin ? css`
    margin: ${margin};
  ` : ''}
  ${({ nowrap }) => nowrap ? css`white-space: nowrap;` : ''}
`;

export const AbsoluteDiv = styled.div`
  position: absolute;
  ${({ top }) => top ? css`
    top: ${top};
  ` : ''}
  ${({ bottom }) => bottom ? css`
    bottom: ${bottom};
  ` : ''}
  ${({ left }) => left ? css`
    left: ${left};
  ` : ''}
  ${({ right }) => right ? css`
    right: ${right};
  ` : ''}
  ${({ fontSize }) => fontSize ? css`
    font-size: ${fontSize};
  ` : ''}
`;

export const RelativeDiv = styled.div`
  position: relative;
`;
