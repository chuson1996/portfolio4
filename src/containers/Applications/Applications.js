import React, { Component } from 'react';
// import styled from 'styled-components';
import { FixedTitle } from 'theme/types';
import { ProjectsContainer } from 'theme/grid';

export default class Applications extends Component {
  render(){
    const {children} = this.props;
    return (
      <div>
        <FixedTitle>APPLICATIONS</FixedTitle>
        <ProjectsContainer>
          { children }
        </ProjectsContainer>
      </div>
    );
  }
}
