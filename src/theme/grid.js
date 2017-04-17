import styled, { css } from 'styled-components';
import { color1 } from 'theme/variables';
import media from 'theme/media';

export const Div = styled.div`
  ${({ block }) => block && css`display: block;`}
  ${({ inline }) => inline && css`display: inline-block;`}
  ${({ noOverflow }) => noOverflow && css`overflow: hidden;`}
  ${({ textRight }) => textRight && css`text-align: right;`}
  ${({ textCenter }) => textCenter && css`text-align: center;`}
  ${({ textLeft }) => textLeft && css`text-align: left;`}
  ${({ marginBottom }) => marginBottom && css`margin-bottom: ${marginBottom};`}
  ${({ marginTop }) => marginTop && css`margin-top: ${marginTop};`}
  ${({ marginLeft }) => marginLeft && css`margin-left: ${marginLeft};`}
  ${({ marginRight }) => marginRight && css`margin-right: ${marginRight};`}
  ${({ paddingBottom }) => paddingBottom && css`padding-bottom: ${paddingBottom};`}
  ${({ paddingTop }) => paddingTop && css`padding-top: ${paddingTop};`}
  ${({ paddingLeft }) => paddingLeft && css`padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && css`padding-right: ${paddingRight};`}
  ${({ zIndex }) => zIndex && css`z-index: ${zIndex};`}

  ${({ hideInTablet }) => hideInTablet && css`
    ${media.tablet`
      display: none;
    `}
  `}

  ${({ showInTablet }) => showInTablet && css`
    display: none;
    ${media.tablet`
      display: block;
    `}
  `}
`;

export const Absolute = styled(Div)`
  position: absolute;
  ${({ center, middle }) => (center && middle) ? css`
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  ` : null }
  ${({ center, middle }) => (center && !middle) ? css`
    transform: translate(-50%, 0);
    left: 50%;
  ` : null}
  ${({ center, middle }) => (!center && middle) ? css`
    transform: translate(0, -50%);
    top: 50%;
  ` : null}
  ${({ top }) => top ? css`top: ${top};` : null}
  ${({ bottom }) => bottom ? css`bottom: ${bottom};` : null}
  ${({ left }) => left ? css`left: ${left};` : null}
  ${({ right }) => right ? css`right: ${right};` : null}
`;

export const Fixed = styled(Absolute)`
  position: fixed;
`;

export const Flex = styled(Div)`
  display: flex;
  ${({ alignContent }) => alignContent ? css`align-content: ${alignContent};` : null}
  ${({ justifyContent }) => justifyContent ? css`justify-content: ${justifyContent};` : null}
`;

export const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 60px;
  padding-bottom: 80px;
  ${({ flex }) => flex ? css`display: flex;` : null}

  ${media.tablet`
    padding-left: 40px;
    padding-right: 40px;
  `}
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Col = styled(Div)`
  ${({ grow }) => grow ? css`flex-grow: ${grow};`: null}
  ${({ shrink }) => shrink ? css`flex-shrink: ${shrink};`: null}
  padding-left: 30px;
  padding-right: 30px;
`;

export const ProjectsContainer = styled(Div)`
  margin-top: 75px;
`;

export const RevealDiv = styled(Div)`
  &.hide > span::after {
    width: 100%;
  }
  & > span {
    display: inline-block;
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
