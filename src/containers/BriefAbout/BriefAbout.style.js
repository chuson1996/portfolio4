import styled from 'styled-components';
import { RevealH1, RevealH2 } from 'theme/types';
import { Div, RevealDiv } from 'theme/grid';
import media from 'theme/media';
import { black } from 'theme/variables';

export const Headline = styled(RevealH1)`
  color: white;
  font-size: 2.5em;
  white-space: nowrap;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 1.5em;
  `}
`;

export const BackgroundDiv = styled(Div)`
  width: 100%;
  height: 100vh;
  backgroundImage: url(${require('assets/oh-my-god.gif')});
  backgroundPosition: center center;
  backgroundRepeat: no-repeat;
  backgroundSize: cover;
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
