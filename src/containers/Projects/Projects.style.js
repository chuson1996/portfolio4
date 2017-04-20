import styled, { css, keyframes } from 'styled-components';
import { OrderNumber as _OrderNumber } from 'theme/types';
import { Relative } from 'theme/grid';
import _Square from 'components/Square/Square';
import { color1, color2 } from 'theme/variables';
import media from 'theme/media';
import SketchyArrow from 'components/SketchyArrow/SketchyArrow';
import GlitchImage from 'react-glitch';
import Image8Bit from 'react-8bit';
import FoldImage from 'react-fold-image';

const easeFunction = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
const transitionDuration = '1s';

export const OrderNumber = styled(_OrderNumber)`
  margin-left: 5px;
  margin-right: 5px;
  & > div {
    transform: translate(0, 0);
    display: inline-block;
    transition: transform ${transitionDuration} ${easeFunction};
  }
  ${({ hide }) => hide && css`
    & > div:first-child {
      transform: translate(0, -100%);
    }
    & > div:nth-child(2) {
      transform: translate(0, 100%);
    }
  `}
`;

export const InstallCode = styled.p`
  position: absolute;
  top: 50%;
  font-size: 1.7em;
  ${media.tablet`
    font-size: 1em;
  `}
  ${({ right }) => right ? css`
    right: 0;
    margin: 0 0 0 0;
  ` : css`
    margin: 0 0 0 0;
  ` }
  transform: translate(0, 0);
  transition: transform ${transitionDuration} ${easeFunction};
  ${({ hide, right }) => hide && css`
    transform: translate(${right ? '100%' : '-100%'}, 0);
  `}
`;

export const Img1 = styled.img`
  width: 40vw;
  display: inline-block;
  margin: 0 auto;
  ${media.tablet`
    width: 90%;
  `}
`;

export const Img2 = styled(Img1)`
`;

export const Img3 = styled(Img1)`
  width: 60vw;
`;

export const VerticalGuideLine = styled.p`
  transform: rotate(-90deg) translate(-100%, -140%);
  position: absolute;
  top: 0;
  white-space: nowrap;
  ${({ right }) => right ?
    css`
      right: 0;
      transform-origin: right top;
      transform: rotate(90deg) translate(100%, -140%);
    ` :
    css`
      left: 0;
      transform-origin: top left;
    `
  }

  margin: 0;
`;

export const Square = styled(_Square)`
  position: absolute;
  top: 0;
  left: 20px;
  transform: translate(0, -50%);
  z-index: 2;
`;

export const Group = styled(Relative)`
  margin-bottom: 130px;
`;

const wave = keyframes`
  0% {
    transform: translate(0, -20px);
    color: ${color1};
  }

  100% {
    transform: translate(0, 20px);
    color: ${color2};
  }
`;

export const MagicParagraph = styled(Relative)`
  border: 15px solid ${color1};
  padding: 40px;
  width: 60%;
  .magicLine {
    display: inline-block;
    animation: 1.3s ${wave} cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  ${Array(20).fill(null).map((_, i) =>
    css`.magicLine:nth-child(${i}) {animation-delay: ${i * 0.1}s;}`
  )}
`;

export const StyledSketchyArrow = styled(SketchyArrow)`
  position: absolute;
  top: 5px;
  left: 60%;
  transform: translate(-50%, -100%) rotateY(180deg);
  z-index: -1;
`;

export const StyledGlitchImage = styled(GlitchImage)`
  width: 400px;
  cursor: pointer;
  display: inline-block;
  ${media.tablet`
    width: 100%;
  `}
`;

export const StyledImageBefore8Bit = styled.img`
  width: 300px;
  ${media.tablet`
    width: 100%;
  `}
`;

export const StyledImage8Bit = styled(Image8Bit)`
  width: 300px;
  margin-left: 50px;
  ${media.tablet`
    width: 100%;
    margin-left: 0;
  `}
`;

export const StyledFoldImage = styled(FoldImage)`
  width: 600px;
  ${media.tablet`
    width: 100%;
  `}
`;
