import React, { Component } from "react";
import styled, { css, keyframes, ThemeProvider } from "styled-components";
import {
  menuTextColor,
  menuBackground,
  color3,
  socialMediaInverseColor
} from "theme/variables";
import { A } from "theme/types";
import media from "theme/media";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { open as openMenu, close as closeMenu } from "redux/modules/menu";
import { Flex, Div, Relative } from "theme/grid";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { easeInOutQuart, easeOutQuart } from "theme/easeFunctions";

const Container = styled(Flex)`
  color: ${menuTextColor};

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  font-size: 16px;

  justify-content: center;
  flex-direction: column;

  background-color: ${menuBackground};
  z-index: 98;

  text-align: center;

  // p {
  //   color: white;
  // }

  h1 {
    margin: 0;
    margin-top: 25px;
  }

  ${media.tablet`
    h1 {
      font-size: 1.5em;
    }
  `}
  transition: transform 0.6s ${easeInOutQuart};
  ${({ hide }) => hide && css`
    transform: translateY(-100%);
  `}
`;

const Content = styled(Relative)`
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
  ${media.tablet`
    padding-top: 0;
    padding-left: 40px;
    padding-right: 40px;
  `}
`;

const Background = styled.div`
  position: fixed;
  background-image: url(${require("assets/body-background.png")});
  background-size: 100%;
  background-position: center center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: 0.1;
  pointer-events: none;
  transition: opacity .4s;
`;

const revealUpKeyframes = keyframes`
  from { transform: translateY(105%); }
  to { transform: translateY(0); }
`;

const RevealUp = styled(Div)`
  overflow: hidden;
  & > * {
    ${({ show }) => show && css`
      transform: translateY(105%);
      animation: ${revealUpKeyframes} .6s ${easeOutQuart};
      animation-delay: 0.6s;
      animation-fill-mode: forwards;
    `}
  }
`;

class Menu extends Component {
  render() {
    const { menuOpen, push, closeMenu /* openMenu */ } = this.props;

    const goTo = to => {
      push(to);
      closeMenu();
    };

    return (
      <Div>
        <Background style={menuOpen ? null : { opacity: 0 }} />
        <Container hide={!menuOpen}>
          <Content>
            <Div marginBottom="50px">
              <RevealUp show={menuOpen}>
                <h1 style={{ marginTop: 0 }}>
                  <A
                    toColor={color3}
                    color={menuTextColor}
                    onClick={() => goTo("/")}
                  >
                    HOME
                  </A>
                </h1>
              </RevealUp>
              {/* <RevealUp show={menuOpen}>
                <h1>
                  <A
                    toColor={color3}
                    color={menuTextColor}
                    onClick={() => goTo("/applications")}
                  >
                    APPLICATIONS
                  </A>
                </h1>
              </RevealUp> */}
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                    toColor={color3}
                    color={menuTextColor}
                    onClick={() => goTo("/projects")}
                  >
                    OPEN-SOURCE PROJECTS
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                    toColor={color3}
                    color={menuTextColor}
                    onClick={() => goTo("/aboutMe")}
                  >
                    ABOUT ME
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                    toColor={color3}
                    color={menuTextColor}
                    onClick={() => goTo("/tutorials")}
                  >
                    HOW I CREATED THIS PORTFOLIO
                  </A>
                </h1>
              </RevealUp>
              <RevealUp show={menuOpen}>
                <h1>
                  <A
                    color={'rgb(176, 230, 253)'}
                    toColor={color3}
                    href={'https://standardresume.co/chuhoangson'}
                  >
                    Resume
                  </A>
                </h1>
              </RevealUp>
            </Div>
            <RevealUp show={menuOpen}>
              <Div>
                <ThemeProvider theme={{ color: socialMediaInverseColor }}>
                  <SocialMedia horizontal justifyContent="center" />
                </ThemeProvider>
              </Div>
            </RevealUp>
            <RevealUp show={menuOpen}>
              <p style={{ marginBottom: 0 }}>
                <A
                  style={{ color: "white" }}
                  color="white"
                  href="mailto:chuson1996@gmail.com"
                >
                  chuson1996@gmail.com
                </A>
              </p>
            </RevealUp>
          </Content>
        </Container>
      </Div>
    );
  }
}

export default connect(
  state => ({
    menuOpen: state.menu
  }),
  {
    push,
    openMenu,
    closeMenu
  }
)(Menu);
