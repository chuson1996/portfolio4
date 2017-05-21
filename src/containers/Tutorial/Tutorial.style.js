import styled from 'styled-components';
import { Flex, Div, Absolute } from 'theme/grid';
import { red } from 'theme/variables';
import media from 'theme/media';

export const TutorialContainer = styled(Flex)`
  padding: 1em 0;
  ${media.phone`
    flex-direction: column;
  `}
`;

export const Thumbnail = styled.a`
  position: relative;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 40%;
  ${media.phone`
    width: 100%;
  `}
  img.thumbnail {
    width: 100%;
  }
  img.youtubePlayButton {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    opacity: 0.7;
    transition: opacity .3s;
  }
  &:hover {
    img.youtubePlayButton {
      opacity: 1;
    }
  }
`;

export const DescriptionContainer = styled(Div)`
  margin-left: 1.5em;
  & > h4 {
    margin-top: 0;
  }
  & > .description > p:first-of-type {
    margin-top: 0;
  }
  ${media.phone`
    margin-left: 0;
    margin-top: 1em;
  `}
`;

export const OrderNumber = styled(Absolute)`
  font-size: 3em;
  z-index: -1;
  opacity: 0.4;
  color: ${red};
  top: -40px;
  left: 4px;
  h1 {
    margin-top: 0;
  }
  ${media.phone`
    top: -20px;
  `}
`;
