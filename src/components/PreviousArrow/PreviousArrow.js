import React, {Component} from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Relative } from 'theme/grid';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import c from 'classnames';
import { arrowColor } from 'theme/variables';
import media from 'theme/media';

const MOUSE_OVER = 'previousArrow/MOUSE_OVER';
const MOUSE_LEAVE = 'previousArrow/MOUSE_LEAVE';

function mouseOver() {
  return { type: MOUSE_OVER };
}

function mouseLeave() {
  return { type: MOUSE_LEAVE };
}

export function reducer(state = { hover: false }, action) {
  switch (action.type) {
    case MOUSE_OVER:
      return { hover: true };
    case MOUSE_LEAVE:
      return { hover: false };
    default:
      return state;
  }
}

const Text = styled.p`
  font-size: 0.7em;
  position: absolute;
  top: -10px;
  margin: 0;
  left: 50%;
  white-space: nowrap;
  color: ${arrowColor};

  transition: .5s opacity, .5s transform;
  &.hover {
    transform: translate(10px, 0);
  }

  &.enter {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  &.enterActive {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.leave {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.leaveActive {
    opacity: 0;
    transform: translate(100%, 0);
  }
`;

const flip = `rotateY(180deg)`;

const SVG = styled.svg`
  transition: .5s opacity, .5s transform;
  transform: ${flip};

  &.hover {
    transform: translate(-10px, 0) ${flip};
  }

  &.enter {
    opacity: 0;
    transform: translate(100%, 0) ${flip};
  }
  &.enterActive {
    opacity: 1;
    transform: translate(0, 0) ${flip};
  }
  &.leave {
    opacity: 1;
    transform: translate(0, 0) ${flip};
    position: absolute;
    right: 0;
    top: 0;
  }
  &.leaveActive {
    opacity: 0;
    transform: translate(-100%, 0) ${flip};
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Wrapper = styled(Relative)`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  width: 75px;
  height: 33px;
  left: 5vw;
  ${media.tablet`
    left: 40px;
  `}

  cursor: pointer;

  transform: opacity 1s;
`;

class previousArrow extends Component {
  render() {
    const { push, location: { pathname }, mouseOver, mouseLeave, hover, loadingProgress} = this.props;
    let text, onClick = () => {};
    switch (pathname) {
      // case '/applications/frodev':
      //   text = 'Home Page'
      //   onClick = () => push('/');
      //   break;
      // case '/applications/speedvocab':
      //   text = 'FroDev'
      //   onClick = () => push('/applications/frodev');
      //   break;
      case '/projects':
        text = 'Home'
        onClick = () => push('/');
        break;
      case '/aboutMe':
        text = 'Open-source Projects';
        onClick = () => push('/projects');
        break;
      default:
        break;
    }

    return (
      <Wrapper
        onClick={onClick}
        style={{ opacity: loadingProgress === 100 ? 1 : 0 }}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}>
        <Relative>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'enter',
              enterActive: 'enterActive',
              leave: 'leave',
              leaveActive: 'leaveActive'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {text && <Text
              key={text}
              className={c({ hover: hover })}
            >{text}</Text>}
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'enter',
              enterActive: 'enterActive',
              leave: 'leave',
              leaveActive: 'leaveActive'
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {text &&
              <SVG
                key={text}
                className={c({ hover: hover })}
                width="75px"
                height="33px"
                viewBox="-2 -2 110 48">
                <path d="M0,22 L104.5,22" id="Line" stroke={arrowColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                <path d="M105.299988,22 L84.4340455,0.181462389"stroke={arrowColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                <path d="M105.299988,43.7852408 L84.4340458,21.9667036" stroke={arrowColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(94.867017, 32.875972) scale(1, -1) translate(-94.867017, -32.875972) "></path>
              </SVG>
            }
          </ReactCSSTransitionGroup>
        </Relative>
      </Wrapper>
    );
  }
}

export default connect(
  (state) => ({
    hover: state.previousArrow.hover,
    loadingProgress: state.loadingProgress.data
  }),
  {
    mouseOver,
    mouseLeave,
    push
  }
)(withRouter(previousArrow));
