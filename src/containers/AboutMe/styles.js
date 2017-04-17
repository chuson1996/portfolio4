import styled, { css } from 'styled-components';
import { color2, color1, color3, color5 } from 'theme/variables';
import { Flex, Relative } from 'theme/grid';
import { OrderNumber } from 'theme/types';
import media from 'theme/media';
import ClickHereCircle from 'components/ClickHereCircle/ClickHereCircle';
// import Image8Bit from 'components/Image8Bit/Image8Bit';
import Image8Bit from 'react-8bit';

export const LeftP = styled.p`
  margin-bottom: 2em;
  width: 80%;
  ${media.tablet`
    width: 100%;
  `}
  &.hide > span::after {
    width: 100%;
  }
  &.hide > span {
    transform: scale(0.95);
  }
  & > span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: 1s transform;
    &::after {
      content: ' ';
      background-color: ${color1};
      position: absolute;
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }
`;

export const RightP = styled.p`
  margin-bottom: 2em;
  text-align: right;
  width: 60vw;
  margin-right: 0;
  margin-left: auto;

  color: ${color2};
  &.hide > span::after {
    width: 100%;
  }
  &.hide > span {
    transform: scale(0.95);
  }
  & > span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: 1s transform;
    &::after {
      content: ' ';
      background-color: ${color2};
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: 1s width;
    }
  }

  opacity: 1;
  &.unanswered {
    cursor: pointer;
    opacity: 0.5;
  }

  &.unanswered:hover {
    opacity: 1;
  }
`;

export const AudioLine = styled.div`
  position: relative;

  width: 400px;
  height: 1em;

  ${media.tablet`
    width: 80%;
  `}

  &::before,
  .mainLine {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0.4em;
    width: 100%;
    height: 0.2em;
    background-color: ${color1};
  }
  .mainLine {
    background-color: ${color5};
    width: 0%;
    transition: 1s width linear;
    z-index: 1;
  }
`;

export const MusicPlayerContainer = styled(Flex)`
  border: 2px solid ${color1};
  padding: 20px;
  align-content: center;
  width: 495px;

  ${media.tablet`
    width: initial;
  `}
`;

export const PlayButton = styled(Flex)`
  width: 50px;
  height: 50px;
  border: 2px solid ${color1};
  border-radius: 50%;
  margin-right: 30px;
  flex-grow: 0;
  flex-shrink: 0;

  justify-content: center;
  align-content: center;
  cursor: pointer;

  p {
    margin: auto;
  }
`;

export const Pointer = styled.span`
  cursor: pointer;
`;

export const NormalImageStuff = styled(Relative)`
  ${({ noPointer }) => noPointer ? null : css`cursor: pointer;`}
  .thumbnailImage {
    width: 400px;
    display: block;
    vertical-align: middle;
    ${media.tablet`
      width: 100%;
    `}
  }
  .playButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    opacity: 0.4;
    transition: opacity .2s;
  }
  &:hover {
    .playButton {
      opacity: 1;
    }
  }

  &.hide::after {
    width: 100%;
  }
  &::after {
    content: ' ';
    width: 0%;
    height: 100%;
    background-color: ${color1};
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s width;
  }
`;

export const StyledVideoBlock = styled(Relative)`
  &.hide::after {
    width: 100%;
  }
  &::after {
    content: ' ';
    width: 0%;
    height: 100%;
    background-color: ${color1};
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s width;
  }
`;

export const Thumbnail = styled.img`
  width: 40vw;
  ${media.tablet`
    width: 100%;
  `}
  display: block;
  vertical-align: middle;
`;

export const ThumbnailCanvas = styled(Image8Bit)`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  pointer-events: none;

  transition: 1s opacity;
`;

export const ThumbnailWrapper = styled(Relative)`
  &.hide::after {
    width: 100%;
  }
  &::after {
    content: ' ';
    width: 0%;
    height: 100%;
    background-color: ${color1};
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s width;
  }
`;

export const ThumbnailTitle = styled.h1`
  color: ${color1};
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  ${media.tablet`
    transform: translate(0, -31%);
  `}
  margin: 0;
  z-index: 1;
  pointer-events: none;
  ${({ theme }) => theme.align === 'right' ?
    css`
      right: 80%;
      text-align: right;
      ${media.tablet`
        right: 0;
        text-align: left;
      `}
    ` :
    css`
      left: 80%;
      text-align: left;
      ${media.tablet`
        left: 0;
        text-align: right;
      `}
    `
  }
`;

export const ThumbnailNumber = styled(OrderNumber)`
  position: absolute;
  top: 0;
  margin: 0;
  color: ${color3};
  ${({ theme }) => theme.align === 'right' ?
    css`
      left: 0;
      transform: translate(-80%, -30%);
    ` :
    css`
      right: 0;
      transform: translate(80%, -30%);
    `
  }
  ${media.tablet`
    display: none;
  `}
`;

export const StyledClickHereCircle = styled(ClickHereCircle)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(0, -30%);
`;
