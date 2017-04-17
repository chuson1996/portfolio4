import React, { Component } from 'react';
import { RevealDiv, Col } from 'theme/grid';
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
                  <ImgDesktop src={require('assets/speedvocab-desktop.png')} alt=""/>
                </span>
              </RevealDiv>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <RevealDiv color={color1} textCenter fromLeftToRight className={c({ hide: !show })}>
                <span>
                  <ImgMobile src={require('assets/speedvocab-mobile.png')} alt=""/>
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
                  href="https://speedvocab2.herokuapp.com">
                  <span>SpeedVocab</span>
                </RevealA>
              }
            </WaypointShow>
          </H1>
          <WaypointShow>
            {({ show }) =>
              <RevealP fromLeftToRight className={c({ hide: !show })}>
                <span>Combine Quizlet with Markdown style.</span>
              </RevealP>
            }
          </WaypointShow>
          <WaypointShow>
            {({ show }) =>
              <RevealP fromLeftToRight className={c({ hide: !show })}>
                <span>
                  Motive:
                  <br/>
                  The best way to study new words is to remember them in an example or a context. For each word, Quizlet provides 2 fields: term and definition. By writing markdown-style examples or word usages in Quizlet's definition field, the result will be shown beautifully in SpeedVocab.
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
