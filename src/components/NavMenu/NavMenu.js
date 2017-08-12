import React, { Component } from 'react';
import { Container, StyledLink, StyledA } from './NavMenu.style';

class NavMenu extends Component {
  render() {
    return (
      <Container>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/projects'}>Projects</StyledLink>
        <StyledLink to={'/aboutMe'}>About Me</StyledLink>
        <StyledLink to={'/tutorials'}>How I make this?</StyledLink>
        <StyledA href={'https://standardresume.co/chuhoangson'}>Resume</StyledA>
      </Container>
    );
  }
}

export default NavMenu;