import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { color1 } from 'theme/variables';
import LoadingPage from 'containers/LoadingPage/LoadingPage';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import Hamburger from 'components/Hamburger/Hamburger';
import Menu from 'components/Menu/Menu';
import NextArrow from 'components/NextArrow/NextArrow';
import PreviousArrow from 'components/PreviousArrow/PreviousArrow';
import { Fixed } from 'theme/grid';
import { backgroundColor, color2 } from 'theme/variables';
import media from 'theme/media';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import NavMenu from 'components/NavMenu/NavMenu';
import { Tablet, NonTablet } from 'components/Media/Media';
import DivWithBgImage from 'components/DivWithBgImage/DivWithBgImage';
import {connect} from 'react-redux';
import {isLoading} from 'redux/modules/loadingStatus';
import { registerItem, doneLoading } from 'redux/modules/loadingStatus';
import { withRouter } from 'react-router';

const Body = styled.div`
  // background-color: ${color1};
  min-height: 100vh;
`;

const Background = styled(DivWithBgImage).attrs({
  backgroundImageUrl: require('assets/body-background.png')
})`
  position: fixed;
  background-image: url(${require('assets/body-background.png')});
  background-color: ${backgroundColor};
  background-size: 100%;
  background-position: center center;
  z-index: -99;
  opacity: 0.1;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  ${media.tablet`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  `}
`;

class App extends Component {
  state = {
    waitingToFinishLoading: true
  }

  componentDidMount() {
    this.props.registerItem('appBackground');
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.state.waitingToFinishLoading && !nextProps.loading) {
      this.setState({ waitingToFinishLoading: false });
    }

    if (this.props.location.pathname !== nextProps.location.pathname) {
      console.log('CCCC');
      console.log(nextProps.loading);
      this.setState({
        waitingToFinishLoading: true
      });
    }
  }

  render() {
    const { loading, doneLoading } = this.props;
    const { waitingToFinishLoading } = this.state;
    return (
      <Body>
        <Tablet>
          <Hamburger/>
        </Tablet>
        <NonTablet>
          <NavMenu/>
        </NonTablet>
        <Fixed bottom="60px" left="40px" hideInTablet>
          <ThemeProvider theme={{ color: color2 }}>
            <SocialMedia/>
          </ThemeProvider>
        </Fixed>
        <Menu/>
        <Background onLoadStatusChange={({ loading }) => {
          if (!loading) doneLoading('appBackground');
        }}/>
        <LoadingPage loading={waitingToFinishLoading && loading}/>
        {this.props.children}
        <PreviousArrow/>
        <NextArrow/>
      </Body>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    loading: isLoading(state)
  }),
  {
    registerItem, doneLoading
  }
)(App));
