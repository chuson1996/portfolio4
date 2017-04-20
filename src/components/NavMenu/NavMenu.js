import React, { Component } from 'react';
import { Container, StyledLink } from './NavMenu.style';

class NavMenu extends Component {
  render() {
    return (
      <Container>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/projects'}>Projects</StyledLink>
        <StyledLink to={'/aboutMe'}>About Me</StyledLink>
      </Container>
    );
  }
}

export default NavMenu;