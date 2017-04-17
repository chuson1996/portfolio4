/* globals emailjs */
import React, { Component } from 'react';
import { RevealDiv, ProjectsContainer, Container, Relative, Flex } from 'theme/grid';
import { ThemeProvider } from 'styled-components';
import { A, FixedTitle } from 'theme/types';
import { connect } from 'react-redux';
// import { Motion, spring } from 'react-motion';
import c from 'classnames';
import Video from 'components/Video/Video';
import Waypoint from 'react-waypoint';
import AudioPlayer from 'components/AudioPlayer/AudioPlayer';
import ImageZoomyParallax from 'components/ImageZoomyParallax/ImageZoomyParallax';
import ContactForm from 'components/ContactForm/ContactForm';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import { color3, color5 } from 'theme/variables';
import ReactPlayer from 'react-player';
import { MusicPlayerContainer, PlayButton, StyledClickHereCircle, ThumbnailWrapper, ThumbnailNumber, ThumbnailTitle, Thumbnail, StyledVideoBlock, LeftP, RightP, AudioLine, Pointer, NormalImageStuff, ThumbnailCanvas } from './styles';
import { Motion, spring } from 'react-motion';

const NEXT_STEP = 'aboutMe/NEXT_STEP';
const NEXT_PARTIAL_STEP = 'aboutMe/NEXT_PARTIAL_STEP';
const PAUSE_VIDEO1 = 'aboutMe/PAUSE_VIDEO1';
const PLAY_VIDEO1 = 'aboutMe/PLAY_VIDEO1';
const PAUSE_VIDEO2 = 'aboutMe/PAUSE_VIDEO2';
const PLAY_VIDEO2 = 'aboutMe/PLAY_VIDEO2';
const SEND = 'aboutMe/SEND';
const SEND_SUCCESS = 'aboutMe/SEND_SUCCESS';
const SEND_FAIL = 'aboutMe/SEND_FAIL';

export function nextStep() {
  return { type: NEXT_STEP };
}

export function nextPartialStep(amount) {
  return { type: NEXT_PARTIAL_STEP, amount };
}

export function pauseVideo1() {
  return { type: PAUSE_VIDEO1 };
}

export function playVideo1() {
  return { type: PLAY_VIDEO1 };
}

export function pauseVideo2() {
  return { type: PAUSE_VIDEO2 };
}

export function playVideo2() {
  return { type: PLAY_VIDEO2 };
}

export function sendForm(values) {
  return {
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: () => emailjs.send('default_service', 'template_ZQTZL0X7', {
      message_html: values.message,
      from_name: `${values.name} (${values.email})`,
    })
  };
}

const roundDecimal = (val) => Math.round(val * 10) / 10;

const initialState = {
  step: 1,
  video1Playing: false,
  video2Playing: false,
  sending: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case PAUSE_VIDEO1:
      return { ...state, video1Playing: false };
    case PLAY_VIDEO1:
      return { ...state, video1Playing: true };
    case PAUSE_VIDEO2:
      return { ...state, video2Playing: false };
    case PLAY_VIDEO2:
      return { ...state, video2Playing: true };
    case NEXT_STEP:
      return { ...state, step: Math.floor(state.step) + 1 }
    case NEXT_PARTIAL_STEP:
      return { ...state, step: roundDecimal(state.step + action.amount) }
    case SEND:
      return { ...state, sending: true };
    case SEND_SUCCESS:
      return { ...state, sending: false };
    case SEND_FAIL:
      return { ...state, sending: false };
    default:
      return state;
  }
}

class AboutMe extends Component {
  render() {
    const { step, nextStep, pauseVideo1, playVideo1, video1Playing, sending, sendForm } = this.props;
    const onSubmit = (values) => {
      if (!sending) {
        sendForm(values).then(() => {
          alert('Sent');
        });
      }
    };

    return (
      <div>
        <FixedTitle>ABOUT ME</FixedTitle>
        <ProjectsContainer>
          <Container>
            <WaypointShow>
              {({ show }) =>
                <LeftP className={c({ hide: !show })}>
                  <span>
                    Hi there!
                    <br/><br/>
                    You are here means that you want to get to know me. Ok, so, you already know that my name is &nbsp;
                    <AudioPlayer trackId={3}>
                      {({ play, pause, playing, currentTime, duration }) =>
                        <Pointer onClick={playing ? pause : play}>
                          { !playing && <i className="fa fa-play"></i>}
                          { playing && <i className="fa fa-pause"></i>}
                        </Pointer>
                      }
                    </AudioPlayer>
                    &nbsp; Chu Hoang Son. I am from Viet Nam, therefore, Chu is my family name and please call me Son.
                  </span>
                </LeftP>
              }
            </WaypointShow>
            { step >= 1 &&
              <WaypointShow>
              {({ show }) =>
                <Relative>
                  <RightP
                    className={c({ unanswered: step === 1, hide: !show })}
                    onClick={nextStep}
                  >
                    <span>
                      Hi Son,<br/>
                      Nice to meet you, tell me something I don’t know about you. What is your favourite music?
                    </span>
                  </RightP>
                  { step === 1 &&
                    <StyledClickHereCircle color={color3} />
                  }
                </Relative>
              }
              </WaypointShow>
            }
            { step >= 2 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        Good question! You know that you can tell a lot about somebody through his music. Here are my top 3 songs (currently):
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={0}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>Dreams - Joakim Karud</p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={1}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Foxes - Youth (M3H Trap Remix)
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <RevealDiv
                      inline
                      marginBottom="10px"
                      fromLeftToRight
                      className={c({ hide: !show })}>
                      <span style={{ display: 'block' }}>
                        <AudioPlayer trackId={2}>
                          {({ play, pause, playing, currentTime, duration }) =>
                            <MusicPlayerContainer>
                              <PlayButton onClick={playing ? pause : play}>
                                <p>
                                  { !playing && <i className="fa fa-play"></i>}
                                  { playing && <i className="fa fa-pause"></i>}
                                </p>
                              </PlayButton>
                              <div>
                                <p style={{ margin: '0 0 10px 0' }}>
                                  Kontinuum - Lost (feat. Savoi) [NCS Release]
                                </p>
                                <AudioLine>
                                  <span className="mainLine" style={{ width: `${currentTime / duration * 100}%` }}></span>
                                </AudioLine>
                              </div>
                            </MusicPlayerContainer>
                          }
                        </AudioPlayer>
                      </span>
                    </RevealDiv>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        You can definitely play one of songs while conversing with me.
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 2 && nextStep}
                        className={c({ unanswered: step === 2, hide: !show })}
                      >
                        <span>What about sport?</span>
                      </RightP>
                      { step === 2 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 3 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>I LOVE basketball. Check out my epic shot in the video below which I totally didn't attempt over 10 times to make it.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <Relative hideInTablet>
                  <WaypointShow>
                    {({ show }) =>
                      <StyledVideoBlock
                        marginBottom="30px"
                        // className={c({ hide: !show })}
                      >
                        <Waypoint
                          bottomOffset={100}
                          onLeave={pauseVideo1}
                          onEnter={playVideo1}/>
                        <Video
                          playing={video1Playing}
                          videoUrl={require('assets/basketball.mov')}/>
                      </StyledVideoBlock>
                    }
                  </WaypointShow>
                </Relative>
                <Relative showInTablet>
                  <ReactPlayer
                    width="100%"
                    height="auto"
                    url={require('assets/basketball.mov')}
                    playing={false}
                    controls
                  />
                </Relative>
                {/* <LeftP delay={'1s'}>
                  <span>And piano...</span>
                </LeftP>
                <Relative>
                  <StyledVideoBlock delay={'1s'}>
                    <Waypoint
                      onLeave={pauseVideo2}
                      onEnter={playVideo2}/>
                    <Video
                      playing={video2Playing}
                      videoUrl={require('assets/piano.mp4')}/>
                  </StyledVideoBlock>
                </Relative> */}
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 3 && nextStep}
                        className={c({ unanswered: step === 3, hide: !show })}
                      >
                        <span>Yeah... right. Tell me more</span>
                      </RightP>
                      { step === 3 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 4 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>Ok, well, I have a Youtube channel (<A target="_blank" href="https://www.youtube.com/channel/UCE7Y95L1btz6qQkfyFfYFQA">FroDev</A>) where I do some tutorials about web development. I make at least one video every week. My hope is to accomplish 1000 subscribers by the end of 2017.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative textCenter marginBottom="2em">
                      <a target="_blank" href="https://www.youtube.com/channel/UCE7Y95L1btz6qQkfyFfYFQA">
                        <NormalImageStuff textCenter inline className={c({ hide: !show })}>
                          <img className="thumbnailImage" src={require('assets/youtubeThumbnail.png')} alt="youtubeThumbnail"/>
                          <img className="playButton" src={require('assets/youtubePlayButton.png')} alt="youtubePlayButton"/>
                        </NormalImageStuff>
                      </a>
                    </Relative>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>Oh, speaking of Youtube, I’ll share you a little secret, but promise me don’t tell anyone ok?</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        className={c({ unanswered: step === 4, hide: !show })}
                        onClick={step === 4 && nextStep}
                      >
                        <span>Ok, I promise ;)</span>
                      </RightP>
                      { step === 4 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 5 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>I absolutely love Youtube. In fact, 60% of things I’ve learnt so far are from Youtube and 80% of inspiration also are from there. My favourite Youtubers are:</span>
                    </LeftP>
                  }
                </WaypointShow>
                <Flex marginBottom="2em" justifyContent="flex-end">
                  <ThemeProvider theme={{ align: 'right' }}>
                    <Relative>
                      <ThumbnailTitle>
                        Gary <br/>
                        Vaynerchuck
                      </ThumbnailTitle>
                      <ThumbnailNumber>01</ThumbnailNumber>
                      <ImageZoomyParallax
                        thumbnailUrl={require('assets/gary.jpg')}
                        imageUrl={require('assets/gary-big.jpg')}
                        renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                          <WaypointShow bottomOffset={250}>
                            {({ show }) =>
                              <ThumbnailWrapper
                                noOverflow>
                                <ThumbnailTitle style={{ color: color5 }}>
                                  Gary <br/>
                                  Vaynerchuck
                                </ThumbnailTitle>
                                <Thumbnail
                                  onLoad={onImageLoad}
                                  {...thumbnailProps}
                                  alt="Gary Vaynerchuck" />
                                <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                  {({ scaleFactor }) =>
                                    <ThumbnailCanvas
                                      src={require('assets/gary.jpg')}
                                      scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                      style={{
                                        ...thumbnailProps.style
                                      }}
                                    />
                                  }
                                </Motion>
                              </ThumbnailWrapper>
                            }
                          </WaypointShow>
                        }
                      />
                    </Relative>
                  </ThemeProvider>
                </Flex>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>Gary is the smartest and most hard-working guy in the marketing and entrepreneur world. I read one of his amazing books: “Jab, jab, jab, right hook”, which can be perceived as “Give, give, give and ask”. In marketing or any aspect in life, before asking for something, you have to give value to people without 0 expectation. That’s one of the main reasons I started my Youtube channel to teach people how to create web applications. I still keep this lesson in my heart till this day.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>If you have read his book or a fan of Gary, DM me now and you’ll be my friend.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        onClick={step === 5 && nextStep}
                        className={c({ unanswered: step === 5, hide: !show })}
                        delay="3s">
                        <span>Oh cool, I'll check his content. But go on. What is number 2?</span>
                      </RightP>
                      { step === 5 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 6 &&
              <div>
                <Flex marginBottom="2em" justifyContent="flex-start">
                  <ThemeProvider theme={{ align: 'left' }}>
                    <Relative>
                      <ThumbnailTitle>
                        Casey Neistat
                      </ThumbnailTitle>
                      <ThumbnailNumber>02</ThumbnailNumber>
                      <ImageZoomyParallax
                        thumbnailUrl={require('assets/casey.jpg')}
                        imageUrl={require('assets/casey-big.png')}
                        renderThumbnail={({ onImageLoad, thumbnailProps }) =>
                          <WaypointShow bottomOffset={250}>
                            {({ show }) =>
                              <ThumbnailWrapper
                                noOverflow>
                                <ThumbnailTitle style={{ color: color5 }}>
                                  Casey Neistat
                                </ThumbnailTitle>
                                <Thumbnail
                                  onLoad={onImageLoad}
                                  {...thumbnailProps}
                                  alt="Casey Neistat" />
                                <Motion style={{scaleFactor: show ? spring(0.2, { stiffness: 47, damping: 20 }) : spring(20, { stiffness: 47, damping: 20 }) }}>
                                  {({ scaleFactor }) =>
                                    <ThumbnailCanvas
                                      src={require('assets/casey.jpg')}
                                      scaleFactor={100 / Math.floor(scaleFactor) / 5}
                                      style={{
                                        ...thumbnailProps.style
                                      }}
                                    />
                                  }
                                </Motion>
                              </ThumbnailWrapper>
                            }
                          </WaypointShow>
                        }
                      />
                    </Relative>
                  </ThemeProvider>
                </Flex>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>Casey Neistat is the best story teller on Youtube. His stories resonate with the audience. He ignites my curiousity in how to build a product that  is as engaging as his videos.</span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <RightP
                        className={c({ unanswered: step === 6, hide: !show })}
                        onClick={step === 6 && nextStep}
                        delay="1s">
                        <span>That sounds amazing!</span>
                      </RightP>
                      { step === 6 &&
                        <StyledClickHereCircle color={color3} />
                      }
                    </Relative>
                  }
                </WaypointShow>
              </div>
            }
            { step >= 7 &&
              <div>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        My life mission right now is to somehow bring creativity into the web platform and to create engaging and interesting websites that visitors love to come back.
                        <br/><br/>
                        And now excuse me, I have a kitchen on fire.
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <Relative>
                      <NormalImageStuff
                        inline
                        noPointer
                        marginBottom="30px"
                        className={c({ hide: !show })}>
                        <img src={require('assets/kitchen-on-fire.gif')} alt="kitchen on fire" className="thumbnailImage"/>
                      </NormalImageStuff>
                    </Relative>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    <LeftP className={c({ hide: !show })}>
                      <span>
                        I gotta go. It’s been so nice talking to you. Let’s keep in contact, shall we?
                      </span>
                    </LeftP>
                  }
                </WaypointShow>
                <WaypointShow>
                  {({ show }) =>
                    // A work around (https://github.com/erikras/redux-form/issues/1010#issuecomment-221515925)
                    <ContactForm.ContactForm
                      sending={sending}
                      className={c({ hide: !show })}
                      onSubmit={onSubmit}/>
                  }
                </WaypointShow>
              </div>
            }
          </Container>
        </ProjectsContainer>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    step: state.aboutMe.step,
    video1Playing: state.aboutMe.video1Playing,
    video2Playing: state.aboutMe.video2Playing,
    sending: state.aboutMe.sending
  }),
  {
    nextStep,
    nextPartialStep,
    pauseVideo1,
    playVideo1,
    pauseVideo2,
    playVideo2,
    sendForm,
  }
)(AboutMe);
