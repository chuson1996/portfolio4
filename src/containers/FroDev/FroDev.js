import React, { Component } from 'react';
import { RevealDiv, Container, Col } from 'theme/grid';
import { RevealA, RevealP } from 'theme/types';
import { ImgDesktop,
  ImgMobile,
  SkillsWrapper,
  Skill,
  ImgSkill,
  ApplicationsContainer,
  H1 } from 'theme/applications';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import { color1 } from 'theme/variables';
import c from 'classnames';

export default class FroDev extends Component {
  render() {
    return (
      <ApplicationsContainer flex>
        <Col>
          <WaypointShow>
            {({ show }) =>
              <RevealDiv
                marginBottom="66px"
                color={color1}
                fromLeftToRight
                className={c({ hide: !show })}>
                <span>
                  <ImgDesktop src={require('assets/frodev-desktop.png')} alt=""/>
                </span>
              </RevealDiv>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <RevealDiv
                color={color1}
                textCenter
                fromLeftToRight
                className={c({ hide: !show })}>
                <span>
                  <ImgMobile src={require('assets/frodev-mobile.png')} alt=""/>
                </span>
              </RevealDiv>
            }
          </WaypointShow>
        </Col>
        <Col>
          <H1>
            <WaypointShow>
              {({ show }) =>
                <RevealA
                  fromLeftToRight
                  className={c({ hide: !show })}
                  target="_blank"
                  href="https://frodev.herokuapp.com">
                  <span>FroDev</span>
                </RevealA>
              }
            </WaypointShow>
          </H1>
          <WaypointShow>
            {({ show }) =>
              <RevealP fromLeftToRight className={c({ hide: !show })}>
                <span>A tab-based bookmark for developers.</span>
              </RevealP>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <RevealP fromLeftToRight className={c({ hide: !show })}>
                <span>
                  Motive:
                  <br/>
                  It was to hard to manage hundreds of links in modern browsers. I thought of way which is more systematic but flexible to manage saved links. That is using "tags".
                </span>
              </RevealP>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <RevealP fromLeftToRight className={c({ hide: !show })}>
                <span>Skills:</span>
              </RevealP>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <SkillsWrapper fromLeftToRight className={c({ hide: !show })}>
                <Skill>
                  <ImgSkill src={require('assets/react.png')}/>
                  <p>React</p>
                </Skill>
                <Skill fromLeftToRight className={c({ hide: !show })}>
                  <ImgSkill src={require('assets/redux.png')}/>
                  <p>Redux</p>
                </Skill>
                <Skill fromLeftToRight className={c({ hide: !show })}>
                  <ImgSkill src={require('assets/sketch.png')}/>
                  <p>Sketch</p>
                </Skill>
              </SkillsWrapper>
            }
          </WaypointShow>
        </Col>
      </ApplicationsContainer>
    );
  }
}