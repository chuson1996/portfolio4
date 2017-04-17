import React, { Component } from 'react';
import { Relative, Absolute, Container } from 'theme/grid';
// import { BreakParagraph } from 'react-break-paragraph';
import { RevealP, A } from 'theme/types';
import { connect } from 'react-redux';
import c from 'classnames';
import WaypointShow from 'components/WaypointShow/WaypointShow';
// import { color3, color2, color1, color4, color5 } from 'theme/variables';
import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator';
import { BackgroundDiv, Headline, SubHeadline } from './styles';
import transitionFinalize, { whenLeaving, whenAppearing, whenEntering } from 'helpers/transitionFinalize';

class BriefAbout extends Component {
  componentWillReceiveProps(nextProps) {
    whenLeaving(this.props, nextProps)(() => {
      console.log('BriefAbout is leaving');
    })

    whenAppearing(this.props, nextProps)(() => {
      console.log('Brief About is appearing');
    })

    whenEntering(this.props, nextProps)(() => {
      console.log('Brief About is entering');
    })
  }

  render() {
    const { doneLoading } = this.props;
    return (
      <div>
        {doneLoading && <div>
          <WaypointShow>
            {({ show }) =>
              <Relative>
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
                <BackgroundDiv
                  noOverflow
                  textCenter
                >
                </BackgroundDiv>
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
                <WaypointShow>
                  {({ show }) =>
                    <RevealP
                      className={c({ 'hide': !show })}
                      fromLeftToRight>
                      <span>
                        My dad used to call me "The monk who likes many things." Here's why: Whenever he asked me what I was passionate about, I always gave him different answers every single time. "I want to be a pianist," "I want to be a professional basketball player," "I want to be a DJ," I replied. I've never said, "I want to be a web developer." But some way, somehow, I grew my passion around web development before I even noticed it.
                      </span>
                    </RevealP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealP
                      className={c({ 'hide': !show })}
                      fromLeftToRight>
                      <span>
                        To me, it's a super power to be able to create solutions in the form of a website. For example, I created an app that helps me pass my Finnish exam. Recently, I even created a bookmark manager for all my saved links because I couldn't find any other straightforward and easy ways. It's called <A target="_blank" href="http://codeeveryday.life">codeeveryday.life</A>
                      </span>
                    </RevealP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealP
                      className={c({ 'hide': !show })}
                      fromLeftToRight>
                      <span>Click the arrow down on the bottom right corner to check out my open-source projects.</span>
                    </RevealP>
                  }
                </WaypointShow>
              </div>
          </Container>
        </div>}
      </div>
    );
  }
}

export default transitionFinalize(connect(
  (state) => ({
    doneLoading: state.loadingProgress.data === 100
  })
)(BriefAbout));
