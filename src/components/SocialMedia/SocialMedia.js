import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { color3 } from 'theme/variables';
import { connect } from 'react-redux';
// import media from 'theme/media';
import { Flex } from 'theme/grid';

const Container = styled(Flex)`
  color: ${({ theme: { color }}) => color};
  align-content: center;

  font-size: 0.7em;

  transition: color .3s;

  z-index: 99;

  i {
    margin: 0 15px;
  }

  ${({ horizontal }) => !horizontal && css`
    transform: rotate(-90deg);
    transform-origin: left top;
    i {
      transform: rotate(90deg);
    }
  `}

  p {
    margin: 0 10px 0 0;
  }

  a {
    /*color: white;*/
    color: ${({ theme: { color }}) => color};
  }
  a:hover {
    color: ${color3};
  }
`;

class SocialMedia extends Component {
  render() {
    const { /* menuOpen,  */horizontal, ...others } = this.props;
    return (
      <Container horizontal={horizontal} {...others}>
        <p>FOLLOW SON CHU</p>
        <a
          target="_blank"
          href="https://www.facebook.com/sonchu1996">
          <i className="fa fa-facebook"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/code_everyday/">
          <i className="fa fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCE7Y95L1btz6qQkfyFfYFQA">
          <i className="fa fa-youtube"></i>
        </a>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    menuOpen: state.menu
  })
)(SocialMedia);
