import React, { Component } from 'react';
import { StaggeredMotion, spring, presets } from 'react-motion';

export default class SimpleStaggeredMotion extends Component {
  render() {
    const { defaultStyle, length, style, children, springPreset = presets.noWobble } = this.props;
    return (
      <StaggeredMotion
        defaultStyles={Array(length).fill(defaultStyle)}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? style
            : Object.keys(prevInterpolatedStyles[i - 1]).reduce((result, key) => {
              return {
                ...result,
                [key]: spring(prevInterpolatedStyles[i - 1][key], springPreset)
              };
            }, {})
        })}>
        { children }
      </StaggeredMotion>
    );
  }
}
