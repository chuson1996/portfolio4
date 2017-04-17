import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const ProgressTextContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
`;

export default class ProgressText extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    progress: PropTypes.number.isRequired
  };

  render() {
    const { progress } = this.props;

    return (
      <div>
        <ProgressTextContainer>
          {React.cloneElement(this.props.children, {
            style: {
              opacity: 0.2,
              display: 'inline-block'
            }
          })}
          <TopOverlay>
            <Motion style={{ progress: spring(progress) }}>
              {({ progress }) =>
                React.cloneElement(this.props.children, {
                  style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    display: 'inline-block',
                    width: `${progress}%`
                  }
                })
              }
            </Motion>
          </TopOverlay>
        </ProgressTextContainer>
      </div>
    );
  }
}
