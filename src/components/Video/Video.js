import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Motion, spring } from 'react-motion';
import  SquareCursor from 'components/SquareCursor/SquareCursor';
import  Triangle from 'components/Triangle/Triangle';
import { enableScrolling, disableScrolling } from 'scroll';
import { connect } from 'react-redux';
import { color3 } from 'theme/variables';

const Container = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  overflow: hidden;
`;

const PlayerContainer = styled.div`
  position: relative;
  // We need this because we're gonna
  // have elements with "position: absolute"
  cursor: pointer;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTriangle = styled(Triangle)`
  position: absolute;
  top: 50%;
  left: 0;
`;

const StyledSquareCursor = styled(SquareCursor)`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;`;

class Video extends Component {
  static propTypes = {
    videoUrl: PropTypes.string.isRequired,
    playing: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
      hover: false,
      moveDown: 0,
      moveLeft: 0,
      moveVideoLeft: 0,
      expandWidth: 1,
      expandHeight: 1,
      cursorPosition: {
        top: 0,
        left: 0
      },
      maxVideoSize: 100
    };
  }

  toggleZoom = () => {
    const { zoom } = this.state;
    const { clientHeight, clientWidth } = this.player.player.player;
    const videoRatio = clientWidth / clientHeight;
    const windowRatio = window.innerWidth / window.innerHeight;
    
    const maxVideoSize = videoRatio > windowRatio ? (videoRatio / windowRatio * 100) : 100;
    this.setState({
      maxVideoSize
    });

    // When the video is zoom. Disable scrolling
    if (zoom) {
      this.props.enableScrolling();
    } else {
      this.props.disableScrolling();
      this.player.seekTo(0);
    }

    const moveDown = -this.container.getBoundingClientRect().top;
    let moveLeft = -this.container.getBoundingClientRect().left;
    if (maxVideoSize > 100) {
      this.setState({
        moveVideoLeft: -(maxVideoSize/ 100 - 1) / 2 * window.innerWidth
      });
    }
    const expandWidth = window.innerWidth / this.container.offsetWidth;
    const expandHeight = window.innerHeight / this.container.offsetHeight;

    this.setState({
      zoom: !zoom,
      moveDown: !zoom ? moveDown : 0,
      moveLeft: !zoom ? moveLeft : 0,
      expandWidth: !zoom ? expandWidth : 1,
      expandHeight: !zoom ? expandHeight : 1
    });
  };

  onMouseOver = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  onMouseMove = (e) => {
    this.setState({
      cursorPosition: {
        top: e.clientY,
        left: e.clientX
      }
    });
  };

  render() {
    const { videoUrl, playing } = this.props;
    const { zoom, hover, cursorPosition, moveDown, moveLeft, expandWidth, expandHeight, maxVideoSize, moveVideoLeft } = this.state;
    
    const motionStyle = zoom ? {
      videoSize: spring(maxVideoSize),
      triangleLeft: spring(-100),
      moveVideoLeft: spring(0)
    } : {
      videoSize: spring(window.innerWidth > 1440 ? 30 : 70),
      triangleLeft: spring(-50),
      moveVideoLeft: spring(moveVideoLeft)
    };

    return (
      <Container innerRef={(elem) => this.container = elem}>
        <Motion style={{
          containerTop: spring(moveDown),
          containerLeft: spring(moveLeft),
          containerWidth: spring(expandWidth),
          containerHeight: spring(expandHeight)
        }}>
          {({ containerTop, containerLeft, containerWidth, containerHeight }) =>
            <Container style={{
              position: 'absolute',
              zIndex: zoom ? 100 : 'initial',
              width: `${100 * containerWidth}%`,
              height: `${100 * containerHeight}%`,
              top: containerTop,
              left: containerLeft,
            }}>
              <Motion style={motionStyle}>
                {({ videoSize, triangleLeft, moveVideoLeft }) =>
                  <PlayerContainer
                    ref={(elem) => this.playerContainer = elem}
                    onMouseMove={this.onMouseMove}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.toggleZoom}
                    style={{
                      width: `${videoSize}%`,
                      cursor: zoom ? 'none' : 'pointer'
                      // Hide the cursor when it's zoomed.
                    }}>
                    <StyledSquareCursor
                      color={color3}
                      show={zoom}
                      style={{
                        top: cursorPosition.top,
                        left: cursorPosition.left,
                      }}
                    />
                    <StyledTriangle
                      color={color3}
                      hover={hover}
                      style={{
                        transform: `translate(${triangleLeft}%, -50%)`
                      }}/>
                    <ReactPlayer
                      style={{
                        marginLeft: moveVideoLeft
                      }}
                      ref={(player) => this.player = player}
                      width={'100%'}
                      height={'auto'}
                      playing={zoom || playing}
                      loop
                      volume={zoom ? 0.8 : 0}
                      url={videoUrl} />
                  </PlayerContainer>
                }
              </Motion>
            </Container>
          }
        </Motion>
      </Container>
    );
  }
}

export default connect(
  null,
  {
    enableScrolling,
    disableScrolling
  }
)(Video);
