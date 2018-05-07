import React, { Component } from 'react';
import { Relative, Absolute, Container } from 'theme/grid';
// import { BreakParagraph } from 'react-break-paragraph';
import { A } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import WaypointShow from 'components/WaypointShow/WaypointShow';
// import { color3, color2, color1, color4, color5 } from 'theme/variables';
import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
import { BackgroundDiv, Headline, SubHeadline } from './BriefAbout.style';
// import transitionFinalize, { whenLeaving, whenAppearing, whenEntering } from 'helpers/transitionFinalize';
import asyncImageEnhance from 'helpers/asyncImageEnhance';
// import { registerItem, doneLoading, deregisterItem } from 'redux/modules/loadingStatus';
// import AsyncImage from 'components/AsyncImage/AsyncImage';
// import { RevealH1 } from '../../theme/types';

const ProgressBackgroundDiv = (asyncImageEnhance('briefAboutBackground')(
  ({doneLoading}) =>
    <BackgroundDiv
      onLoad={({ loading }) => { !loading && doneLoading() }}
      noOverflow
      textCenter
    />
));

class BriefAbout extends Component {
  render() {
    return (
      <div>
        <WaypointShow>
          {({ show }) =>
            <Relative>
              <ProgressBackgroundDiv/>
              <Absolute center middle zIndex="2">
                <Headline
                  color={'white'}
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>Chu Hoang Son</span>
                </Headline>
                <SubHeadline
                  color={'white'}
                  fromLeftToRight
                  className={c({ 'hide': !show })}
                  textCenter>
                  <span>Front-end developer</span>
                </SubHeadline>
              </Absolute>
              <Absolute center bottom="15px">
                <ScrollIndicator color={'white'} style={{
                  width: 29,
                  height: 100
                }}/>
              </Absolute>
            </Relative>
          }
        </WaypointShow>
        <Container>
            <div>
              <h1>
                <A href="#/projects">Projects</A>
              </h1>
              <h1>
                <A href="#/aboutMe">About Me</A>
              </h1>
              <h1>
                <A href="#/tutorials">How I Make This?</A>
              </h1>
            </div>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    doneLoading: state.loadingProgress.data === 100
  })
)(BriefAbout);
