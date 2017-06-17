import styled from 'styled-components';
import { RevealH1, RevealH2 } from 'theme/types';
import { RevealDiv } from 'theme/grid';
import media from 'theme/media';
import { black } from 'theme/variables';
import DivWithBgImage from 'components/DivWithBgImage/DivWithBgImage';

export const Headline = styled(RevealH1)`
  color: white;
  font-size: 2.5em;
  white-space: nowrap;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 1.5em;
  `}
`;

export const BackgroundDiv = styled(DivWithBgImage).attrs({
  backgroundImageUrl: require('assets/oh-my-god.gif')
})`
  width: 100%;
  height: 100vh;
  background-image: url(${require('assets/oh-my-god.gif')});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SubHeadline = styled(RevealH2)`
  color: white;
  margin-top: 10px;

  ${media.tablet`
    font-size: 1.3em;
  `}
`;

export const ImageContainer = styled(RevealDiv)`
  border: 3px solid ${black};
`;
