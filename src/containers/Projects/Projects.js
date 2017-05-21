import React, { Component } from 'react';
import { A, P, FixedTitle, OrderNumber as _OrderNumber } from 'theme/types';
import { ProjectsContainer, Relative, Container, Flex, Div } from 'theme/grid';
import { connect } from 'react-redux';
import ReactZoomy from 'react-zoomy';
import ToggleState from 'components/ToggleState/ToggleState';
import {
  OrderNumber,
  InstallCode,
  Img1,
  Img2,
  Img3,
  MagicParagraph,
  VerticalGuideLine,
  // Square,
  Group,
  StyledSketchyArrow,
  StyledGlitchImage,
  StyledImage8Bit,
  StyledImageBefore8Bit,
  StyledFoldImage,
} from './Projects.style';
import { Motion, spring } from 'react-motion';
import ImageParallax from 'react-image-parallax2';
import CssToMatrix from 'css-to-matrix';
import BreakParagraph from 'components/BreakParagraph/BreakParagraph';
// import Waypoint from 'react-waypoint';
import WaypointShow from 'components/WaypointShow/WaypointShow';

const IMG1_MOUSE_OVER = 'projects/IMG1_MOUSE_OVER';
const IMG1_MOUSE_LEAVE = 'projects/IMG1_MOUSE_LEAVE';

export function img1MouseOver() {
  return { type: IMG1_MOUSE_OVER };
}

export function img1MouseLeave() {
  return { type: IMG1_MOUSE_LEAVE };
}

const initialState = {
  image1: {
    hover: false
  },
  isGroup1Shown: false,
  isGroup2Shown: false,
  isGroup3Shown: false,
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case IMG1_MOUSE_OVER:
      return {
        ...state,
        image1: { ...state.image1, hover: true }
      };
    case IMG1_MOUSE_LEAVE:
      return {
        ...state,
        image1: { ...state.image1, hover: false }
      };
    default:
      return state;
  }
}

class Projects extends Component {
  render() {
    const { image1Hover, img1MouseOver, img1MouseLeave } = this.props;
    // const springPreset = {damping: 35};

    return (
      <div>
        <FixedTitle>Open-source Projects</FixedTitle>
        <ProjectsContainer>
          <Container>
            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <Relative noOverflow>
                      <OrderNumber hide={!show}>
                        <Div>0</Div>
                        <Div>1</Div>
                      </OrderNumber>
                    </Relative>
                    <InstallCode hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-zoomy">react-zoomy</A></InstallCode>
                  </Relative>
                  <ReactZoomy
                    imageUrl={require('assets/basketball1-big.jpg')}
                    renderThumbnail={({ showImage }) =>
                      <Flex justifyContent="center">
                        <Relative
                          style={{ cursor: 'pointer' }}
                          inline
                          onMouseOver={img1MouseOver}
                          onMouseLeave={img1MouseLeave}>
                          <Motion style={{ y: image1Hover ? spring(10) : spring(0)}}>
                            {({ y }) =>
                              <VerticalGuideLine style={{
                                transform: `rotate(-90deg) translate(-${110 - y}%, -140%)`
                              }}>
                                Click to see the magic
                              </VerticalGuideLine>
                            }
                          </Motion>
                          <Motion style={{ scale: image1Hover ? spring(1.1) : spring(1) }}>
                            {({ scale }) =>
                              <Relative noOverflow>
                                <Img1
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}
                                  src={require('assets/basketball1.png')} alt="basketball1"/>
                              </Relative>
                            }
                          </Motion>
                        </Relative>
                      </Flex>
                    }
                    scale={[1.1, 1.1]}
                    imageProps={{
                      style: {
                        width: '100vw',
                        height: 'auto'
                      }
                    }}
                  />
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>2</Div>
                    </OrderNumber>
                    <InstallCode right hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-image-parallax2">react-image-parallax2</A></InstallCode>
                  </Relative>
                  <Flex justifyContent="flex-start" marginBottom="70px">
                    <Relative>
                      <VerticalGuideLine right style={{
                          transform: `rotate(90deg) translate(100%, -140%)`
                        }}>
                        Keep scrolling...
                      </VerticalGuideLine>
                      <ImageParallax src={require('assets/basketball2.png')} reduceHeight={1/2}/>
                    </Relative>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Relative>
                      <VerticalGuideLine style={{
                          transform: `rotate(-90deg) translate(-100%, -140%)`
                        }}>
                        See the parallax?
                      </VerticalGuideLine>
                      {/*<StyledSketchyArrow/>*/}
                      <Img3>
                        <ImageParallax reduceHeight={1/3} src={require('assets/basketball3.png')}/>
                      </Img3>
                    </Relative>
                  </Flex>
                </Group>
              }
            </WaypointShow>

            {/*<WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>3</Div>
                    </OrderNumber>
                    <InstallCode hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-break-paragraph">react-break-paragraph</A></InstallCode>
                  </Relative>
                  <Flex justifyContent="flex-end">
                    <MagicParagraph>
                      <BreakParagraph
                        paragraph="My 2 favourite tv series of all time are Breaking Bad and How I Met Your Mother. They are legen - wait for it - dary. Am I right? Anyway, see how these lines animate after one another? Because I used react-break-paragraph (plus some other magic tricks). :D"
                        renderPlaceholder={(children) => <p>{children}</p>}
                        renderLines={(lines) => <p>
                          {lines.map((line, i) =>
                            <span key={i} className="magicLine">{line + ' '}</span>
                          )}
                        </p>}/>
                    </MagicParagraph>
                  </Flex>
                </Group>
              }
            </WaypointShow>*/}

            {/*<WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>4</Div>
                    </OrderNumber>
                    <InstallCode right hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-glitch">react-glitch</A></InstallCode>
                  </Relative>
                  <ToggleState defaultState>
                    {({ state, turnTrue, turnFalse }) =>
                      <Relative block textCenter>
                        <WaypointShow topOffset={200} bottomOffset={-100} defaultBehavior>
                          {({ show: show2 }) =>
                            <Relative inline>
                              <VerticalGuideLine right>
                                Click to { show && state ? 'stop' : 'start'} the glitch!
                              </VerticalGuideLine>
                              <StyledGlitchImage
                                onClick={state ? turnFalse : turnTrue}
                                src={require('assets/adidaphat.jpg')}
                                alt="adidaphat"
                                glitching={show && show2 && state}
                                glitchOptions={{
                                  seed: [0, 30, 60],
                                  quality: 99,
                                  amount: 0,
                                  iterations: [1, 5, 10, 20]
                                }}
                                speed={[50, 200]}
                              />
                            </Relative>
                          }
                        </WaypointShow>
                      </Relative>
                    }
                  </ToggleState>
                </Group>
              }
            </WaypointShow>*/}

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>3</Div>
                    </OrderNumber>
                    <InstallCode hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-8bit">react-8bit</A></InstallCode>
                  </Relative>
                  <Relative>
                    <Relative inline>
                      <VerticalGuideLine right>
                        Original
                      </VerticalGuideLine>
                      <StyledImageBefore8Bit
                        src={require('assets/me.jpg')}
                        alt={'My Selfie'}
                      />
                    </Relative>
                    <Relative inline>
                      <VerticalGuideLine right>
                        Pixelated!
                      </VerticalGuideLine>
                      <StyledImage8Bit
                        scaleFactor={4}
                        src={require('assets/me.jpg')}
                      />
                    </Relative>
                  </Relative>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textRight noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>4</Div>
                    </OrderNumber>
                    <InstallCode right hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-fold-image">react-fold-image</A></InstallCode>
                  </Relative>
                  <Relative block>
                    <WaypointShow bottomOffset={400}>
                      {({ show: show2 }) =>
                        <ToggleState defaultState>
                          {({ state, turnTrue, turnFalse }) =>
                            <StyledFoldImage
                              noCol={4}
                              noRow={4}
                              earlyRatio={0.3}
                              startingPoint={3}
                              startingDirection={'down'}
                              hide={!show2}
                              src={require('assets/adidaphat.jpg')}
                              />
                          }
                        </ToggleState>
                      }
                    </WaypointShow>
                  </Relative>
                </Group>
              }
            </WaypointShow>
            <P textCenter>
              <A
                target="_blank"
                href="https://github.com/chuson1996/">View more</A>
            </P>
          </Container>
        </ProjectsContainer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    image1Hover: state.projects.image1.hover,
  }),
  {
    img1MouseOver,
    img1MouseLeave,
  }
)(Projects);
