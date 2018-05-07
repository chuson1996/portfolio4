import React, { Component, PropTypes } from 'react';
import styled/* , { css } */ from 'styled-components';
import { color3 } from 'theme/variables';
import ReactZoomy from 'react-zoomy';
import { Relative } from 'theme/grid';
import { Motion, spring } from 'react-motion';
import _Square from 'components/Square/Square';
import ImageParallax from 'react-image-parallax';
import CssToMatrix from 'css-to-matrix';
import SquareCursor from 'components/SquareCursor/SquareCursor';
import media from 'theme/media';

const StyledSquareCursor = styled(SquareCursor)`
  position: fixed;
  z-index: 99;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${media.tablet`
    display: none;
  `}
`;

export default class ImageZoomyParallax extends Component {
  static propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    renderThumbnail: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseOver = () => this.setState({ hover: true });
  onMouseLeave = () => this.setState({ hover: false });

  render() {
    const { hover } = this.state;
    const { thumbnailUrl, imageUrl, renderThumbnail } = this.props;

    return (
      <ReactZoomy
        imageUrl={imageUrl}
        renderCursor={({ style, isImageShowed }) =>
          <StyledSquareCursor
            color={color3}
            style={style}
            show={isImageShowed}
          />
        }
        renderThumbnail={({ showImage }) =>
          <Relative
            style={{ cursor: 'pointer' }}
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}>
            <Motion style={{ scale: hover ? spring(1.3) : spring(1.2) }}>
              {({ scale }) =>
                <ImageParallax scale={1.2}>
                  {({ y }, onImageLoad) =>
                    renderThumbnail ?
                      renderThumbnail({
                        onImageLoad,
                        thumbnailProps: {
                          style: {
                            transform: new CssToMatrix()
                              .scale(scale, scale)
                              .translate(0, y)
                              .getMatrixCSS()
                            // transform: `scale(${scale})`
                          },
                          onClick: showImage,
                          src: thumbnailUrl
                        }
                      }) :
                      <Relative noOverflow>
                        <img
                          style={{
                            transform: `scale(${scale})`,
                            display: 'block',
                            verticalAlign: 'middle'
                          }}
                          onClick={showImage}
                          src={thumbnailUrl}
                          alt="" />
                      </Relative>
                  }
                </ImageParallax>
              }
            </Motion>
          </Relative>
        }
        scale={[1.1, 1.1]}
        imageProps={{
          style: {
            width: '100vw',
            height: 'auto'
          }
        }}
      />
    );
  }
}
