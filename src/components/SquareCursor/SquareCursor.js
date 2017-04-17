import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class SquareCursor extends Component {
  render() {
    const { show, color = '#000000', ...others } = this.props;
    const motionStyle = {
      lineStrokeOffset: show ? spring(0) : spring(34), // 34 is the length of the line
      squareStrokeOffset: show ? spring(0): spring(216) // 216 is the perimeter of the square
    };
    return (
      <Motion style={motionStyle}>
        {({ lineStrokeOffset, squareStrokeOffset }) =>
          <svg
            {...others}
            width="54px"
            height="54px"
            viewBox="0 0 54 54">
            <defs>
              <rect id="path-1" x="0" y="0" width="54" height="54"></rect>
              <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="54" height="54" fill="white">
                  <use xlinkHref="#path-1"></use>
              </mask>
            </defs>
            <use
              stroke={color}
              strokeDasharray={216}
              strokeDashoffset={squareStrokeOffset}
              mask="url(#mask-2)"
              strokeWidth="2"
              fill="none"
              xlinkHref="#path-1"></use>
            <path
              d="M14.3589255,14.8085949
              L38.8021816,38.3465452"
              stroke={color}
              strokeDasharray={34}
              strokeDashoffset={lineStrokeOffset}
              strokeWidth="1"
              strokeLinecap="square"
              fill="none"></path>
            <path
              d="M14.2,38.35
              L38.62,14.8"
              stroke={color}
              strokeDasharray={34}
              strokeDashoffset={lineStrokeOffset}
              strokeWidth="1"
              strokeLinecap="square"
              fill="none"></path>
          </svg>
        }
      </Motion>
    );
  }
}
