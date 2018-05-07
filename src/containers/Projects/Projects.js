import React, { Component } from 'react';
import { A, P, FixedTitle, OrderNumber as _OrderNumber, Blockquote } from 'theme/types';
import { ProjectsContainer, Relative, Container, Flex, Div } from 'theme/grid';
import { connect } from 'react-redux';
import ReactZoomy from 'react-zoomy';
import asyncImageEnhance from 'helpers/asyncImageEnhance';
// import ToggleState from 'components/ToggleState/ToggleState';
import {
  OrderNumber,
  InstallCode,
  Img1,
  // Img2,
  Img3,
  // MagicParagraph,
  VerticalGuideLine,
  // Square,
  Group,
  // StyledSketchyArrow,
  // StyledGlitchImage,
  StyledImageAfter8Bit,
  StyledImageBefore8Bit,
  // StyledFoldImage,
} from './Projects.style';
import { Motion, spring } from 'react-motion';
import ImageParallax from 'react-image-parallax2';
// import CssToMatrix from 'css-to-matrix';
// import BreakParagraph from 'components/BreakParagraph/BreakParagraph';
// import Waypoint from 'react-waypoint';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import DistortionImage from 'react-distortion-image';

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

const LaptopImage = asyncImageEnhance('projects/laptop')(
  ({doneLoading, ...rest}) =>
    <Img1
      onLoad={doneLoading}
      {...rest}
      src={require('assets/images/laptop-small.jpeg')}
      alt="laptop"/>
)

const Basketball2Image = asyncImageEnhance('projects/basketball2')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Basketball3Image = asyncImageEnhance('projects/basketball3')(
  ({ doneLoading, ...rest }) =>
    <ImageParallax
      onLoad={doneLoading}
      {...rest}/>
);

const Image8BitBefore = asyncImageEnhance('projects/8bitmebefore')(
  ({ doneLoading, ...rest }) =>
    <StyledImageBefore8Bit
      onLoad={doneLoading}
      {...rest}/>
);

const Image8BitAfter = asyncImageEnhance('projects/8bitmeafter')(
  ({ doneLoading, ...rest }) =>
    <StyledImageAfter8Bit
      onLoad={doneLoading}
      {...rest}/>
);

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
        <FixedTitle>Projects</FixedTitle>
        <ProjectsContainer>
          <Container>
            <Blockquote>"I surf websites for the best looking and most interesting features and try to replicate them with ReactJs. (Why ReactJs? Because everything is easier with ReactJs). Afterwards, I make libraries and publish them."</Blockquote>
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
                    imageUrl={require('assets/images/laptop-big.jpg')}
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
                                <LaptopImage
                                  style={{
                                    transform: `scale(${scale})`
                                  }}
                                  onClick={showImage}/>
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
                      <Basketball2Image
                        src={require('assets/images/laptop-and-glasses-small.jpeg')}
                        reduceHeight={1/2}
                      />
                    </Relative>
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Relative>
                      <VerticalGuideLine style={{
                          transform: `rotate(-90deg) translate(-100%, -140%)`
                        }}>
                        See the parallax?
                      </VerticalGuideLine>

                      <Img3>
                        <Basketball3Image reduceHeight={1/3} src={require('assets/images/coding-screen.jpeg')}/>
                      </Img3>
                    </Relative>
                  </Flex>
                </Group>
              }
            </WaypointShow>

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
                      <Image8BitBefore
                        src={require('assets/images/photo-edit-screen.jpeg')}
                        alt={'My Selfie'}
                      />
                    </Relative>
                    <Relative inline>
                      <VerticalGuideLine right>
                        Pixelated!
                      </VerticalGuideLine>
                      <Image8BitAfter
                        scaleFactor={4}
                        src={require('assets/images/photo-edit-screen.jpeg')}
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
                    <InstallCode right hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/really-smooth-scroll">really-smooth-scroll</A></InstallCode>
                  </Relative>
                  <p style={{textAlign: 'right'}}>This library smoothens scrolling in desktop browser.</p>
                </Group>
              }
            </WaypointShow>

            <WaypointShow bottomOffset={250}>
              {({ show }) =>
                <Group>
                  <Relative textLeft noOverflow>
                    <OrderNumber hide={!show}>
                      <Div>0</Div>
                      <Div>5</Div>
                    </OrderNumber>
                    <InstallCode left hide={!show}>npm install --save <A target="_blank" href="https://github.com/chuson1996/react-distortion-image">react-distortion-image</A></InstallCode>
                  </Relative>
                  <Relative>
                    <Relative inline>
                      <VerticalGuideLine right>
                        Hover over the image
                      </VerticalGuideLine>
                      <DistortionImage
                        style={{ width: 600, height: 400, maxWidth: 'calc(100vw - 80px)',
                          maxHeight: 'calc(66vw - 80px)' }}
                        image1={require('assets/images/camera-laptop.jpeg')}
                        image2={require('assets/images/bridge-screen.jpeg')}
                        displacementImage={require('assets/images/3.jpg')}
                      />
                    </Relative>
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
