import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import styled, { ThemeProvider, css } from 'styled-components';

const Path = styled.path`
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
  transition: stroke-dashoffset .2s;
  ${({ theme: { show }}) => show && css`
    stroke-dashoffset: 0;
  `}
`;

export default class SquareCursor extends Component {
  render() {
    const { show, color = '#000000', ...others } = this.props;
    // const motionStyle = {
    //   lineStrokeOffset: show ? spring(0) : spring(70), // 34 is the length of the line
    // };
    return (
      <ThemeProvider theme={{ show }}>
        <svg {...others} width="54px" height="59px" viewBox="207 452 54 59" version="1.1">
          <g stroke="none" strokeWidth="7" fill="none" fillRule="evenodd" transform="translate(211.000000, 456.000000)" strokeLinecap="round">
            <Path
              d="M0.5,0.5 L45.5,50.5"
              stroke={color}
              strokeWidth="7"
              transform="translate(23.000000, 25.500000) scale(-1, 1) translate(-23.000000, -25.500000) "></Path>
            <Path
              d="M0.5,0.5 L45.5,50.5"
              stroke={color}
              strokeWidth="7"></Path>
          </g>
        </svg>
      </ThemeProvider>
    );
  }
}
