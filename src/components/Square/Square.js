import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Square extends Component {
  render() {
    const { hover, color = '#000000', ...others } = this.props;
    // Animate slower than default spring animation a bit.
    const animate = (val) => spring(val, {
      stiffness: 120,
      damping: 35
    });

    return (
      <Motion style={{ offset: hover ? animate(0) : animate(120) }}>
        {({ offset }) =>
          <svg
            {...others}
            width="40px"
            height="40px"
            viewBox="-4 -3 36 36">
            <polygon
              id="small"
              stroke={color}
              strokeWidth="1"
              fill="none"
              points="28.5 1.5 28.5 29.5 -0.5 29.5 -0.5 0.5 28.5 0.5"></polygon>
            <polygon
              id="big"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={120}
              strokeDashoffset={offset}
              fill="none"
              points="28.5 1.5 28.5 29.5 -0.5 29.5 -0.5 0.5 28.5 0.5"></polygon>
          </svg>
        }
      </Motion>
    );
  }
}
