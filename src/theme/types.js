import styled, { css } from 'styled-components';
import { color3, color1, color2, color5, gray } from 'theme/variables';
import media from 'theme/media';

export const FixedTitle = styled.h1`
  position: fixed;
  top: 20px;
  color: ${color3};
  left: 100px;
  ${media.tablet`
    left: 40px;
    font-size: 1.5em;
    top: 13px;
  `}

  margin: 0;
  z-index: 2;
`;

export const OrderNumber = styled.h1`
  font-size: 7em;
  color: ${color5};
  opacity: 0.4;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const commonTextProps = css`
  ${({ textRight }) => textRight ? css`text-align: right;` : null}
  ${({ textCenter }) => textCenter ? css`text-align: center;` : null}
  ${({ textLeft }) => textLeft ? css`text-align: left;` : null}
`;

export const H1 = styled.h1`
  ${commonTextProps}
`;

export const H2 = styled.h2`
  ${commonTextProps}
`;

export const H3 = styled.h3`
  ${commonTextProps}
`

export const P = styled.p`
  ${({ textRight }) => textRight ? css`text-align: right;` : null}
  ${({ textCenter }) => textCenter ? css`text-align: center;` : null}
  ${({ textLeft }) => textLeft ? css`text-align: left;` : null}
`;

export const A = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 0.1em;
    background-color: ${({ color }) => color || color2};
    transition: .17s background-color, .17s height;
  }
  &:hover {
    &::after {
      background-color: ${({ toColor }) => toColor || color5};
      height: 0.4em;
      z-index: -1;
    }
  }
`;

const commonRevealProps = css`
  &.hide > span::after {
    width: 100%;
  }
  &.hide > span {
    transform: scale(0.95);
  }
  & > span {
    transform: scale(1);
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: 1s transform;
    &::after {
      content: ' ';
      background-color: ${({ color }) => color || color1};
      position: absolute;
      right: 0;
      ${({ fromLeftToRight }) => fromLeftToRight ?
        css`right: 0; ` :
        css`left: 0;`
      }
      top: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }
`;

export const RevealP = styled.p`
  ${commonRevealProps}
`;

export const RevealH1 = styled(H1)`
  ${commonRevealProps};
`;

export const RevealH2 = styled(H2)`
  ${commonRevealProps};
`;

export const RevealH3 = styled(H3)`
  ${commonRevealProps};
`;

export const RevealA = styled(A)`
  &.hide > span::after {
    width: 100%;
  }
  & > span {
    position: relative;
    overflow: hidden;
    &::after {
      content: ' ';
      background-color: ${({ color }) => color || color1};
      position: absolute;
      right: 0;
      ${({ fromLeftToRight }) => fromLeftToRight ?
        css`right: 0; ` :
        css`left: 0;`
      }
      top: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }
`;

export const Blockquote = styled.blockquote`
  font-style: italic;
  color: ${gray};
`
