import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

const upDown = keyframes`
  0% { transform: translate(0, 0px); }
  100% { transform: translate(0, -20px); }
`;

const Arrow = styled.polyline`
  animation: 1s ${upDown} ease-in-out infinite;
  animation-direction: alternate;
`;

export default class ScrollIndicator extends Component {
  render() {
    const { color = '#3B3561', ...others } = this.props;
    return (
      <svg {...others} width="67px" height="228px" viewBox="-2 -2 67 228">
        <circle stroke="none" fill={color} fillRule="evenodd" cx="31" cy="27" r="7"></circle>
        <path d="M1.0042222,29 C1.27566998,12.9382361 14.6012823,0 31,0 C47.3987177,0 60.72433,12.9382361 60.9957778,29 L61,89 C60.72433,105.061764 47.3987177,118 31,118 C14.6012823,118 1.27566998,105.061764 1.0042222,89 L1,29 Z" stroke={color} strokeWidth="3" fill="none"></path>
        <Arrow stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="0 162 31 193 62.5 162"></Arrow>
        <Arrow stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="0 193 31 224 62.5 193"></Arrow>
      </svg>
    );
  }
}
