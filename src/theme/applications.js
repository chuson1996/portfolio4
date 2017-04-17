import styled, {css} from 'styled-components';
import { Container, Div, RevealDiv } from 'theme/grid';
import { color1, normalFontFamily } from 'theme/variables';
import media from 'theme/media';

export const ImgDesktop = styled.img`
  width: 450px;
  ${media.tablet`
    width: 100%;
  `}
`;

export const ImgMobile = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 165px;
  ${media.tablet`
    width: 60%;
  `}
`;

export const SkillsWrapper = styled(Div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 344px;
  ${media.tablet`
    width: 100%;
  `}

  &.hide::after {
    width: 100%;
  }
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
`;

export const Skill = styled(RevealDiv)`
  text-align: center;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ImgSkill = styled.img`
  height: 48px;
`;

export const H1 = styled.h1`
  font-family: ${normalFontFamily};
`;

export const ApplicationsContainer = styled(Container)`
  display: flex;
  ${media.tablet`
    flex-direction: column;
  `}
`