import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'theme/media';

const TabletDiv = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `}
`;

const NonTabletDiv = styled.div`
  display: block;
  ${media.tablet`
    display: none;
  `}
`;

export class Tablet extends Component {
  render() {
    return (
      <TabletDiv>
        {this.props.children}
      </TabletDiv>
    );
  }
}

export class NonTablet extends Component {
  render() {
    return (
      <NonTabletDiv>
        {this.props.children}
      </NonTabletDiv>
    );
  }
}
