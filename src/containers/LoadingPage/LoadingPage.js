import React, { PureComponent, PropTypes } from 'react';
import ProgressText from '../../components/ProgressText/ProgressText';
import { connect } from 'react-redux';
import { increment, nearlyComplete, complete, clear } from '../../redux/modules/loadingProgress';
import { Motion, spring } from 'react-motion';
import { Container,
  Headline,
  AbsoluteText,
  AbsoluteDiv,
  RelativeDiv } from './styles';

class LoadingPage extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    incrementProgress: PropTypes.func.isRequired,
    clearProgress: PropTypes.func.isRequired,
    completeProgress: PropTypes.func.isRequired,
    nearlyCompleteProgress: PropTypes.func.isRequired
  };

  _inc(_status) {
    if (_status >= 100) {
      return _status;
    }

    var rnd = 0;

    // TODO: do this mathmatically instead of through conditions

    var stat = _status / 100;
    if (stat >= 0 && stat < 0.25) {
      // Start out between 3 - 6% increments
      rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
    } else if (stat >= 0.25 && stat < 0.65) {
      // increment between 0 - 3%
      rnd = (Math.random() * 3) / 100;
    } else if (stat >= 0.65 && stat < 0.9) {
      // increment between 0 - 2%
      rnd = (Math.random() * 2) / 100;
    } else if (stat >= 0.8 && stat < 0.89) {
      // finally, increment it .5 %
      rnd = 0.005;
    } else {
      // after 99%, don't increment:
      rnd = 0;
    }

    return rnd * 100;
  }

  componentDidMount() {
    this.startInc();
  }

  componentWillUnmount() {
    this.clear();
  }

  startInc() {
    this.interval = setInterval(() => {
      const { progress } = this.props;
      this.props.incrementProgress(this._inc(progress));
    }, 100);
  }

  clear() {
    if (this.interval) clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    if (loading === this.props.loading) return;
    if (!loading) {
      this.clear();
      this.props.nearlyCompleteProgress();
      setTimeout(() => {
        this.props.completeProgress();
      }, 1000);
    } else {
      this.props.clearProgress();
      this.clear();
      this.startInc();
    }
  }

  render() {
    const { progress } = this.props;

    // const inactiveStyle = {
    //   opacity: 0,
    //   scale: 0.5
    // };

    // const activeStyle = {
    //   opacity: spring(1),
    //   scale: spring(1)
    // };
    return (
      <Motion
        style={progress === 100 ?
          { opacity: spring(0) } :
          { opacity: 1 }}>
        {({ opacity }) =>
          <Container style={{
            opacity,
            pointerEvents: progress === 100 ? 'none' : 'initial'
          }}>
            <ProgressText progress={progress}>
              <Headline>Loading...</Headline>
            </ProgressText>

            {/* <Motion style={progress > 30 ? activeStyle : inactiveStyle}>
              {({ opacity, scale }) =>
                <AbsoluteText
                  style={{
                    opacity,
                    transform: `scale(${scale})`
                  }}
                  right={'120px'}
                  top={'14vh'}>Jab, jab, jab, right hook</AbsoluteText>
              }
            </Motion>

            <Motion style={progress > 10 ? activeStyle : inactiveStyle}>
              {({ opacity, scale }) =>
                <AbsoluteText
                  style={{
                    opacity,
                    transform: `scale(${scale})`
                  }}
                  fontSize={'1.2em'}
                  top={'22vh'}
                  left={'155px'}>Front-end developer</AbsoluteText>
              }
            </Motion>

            <Motion style={progress > 40 ? activeStyle : inactiveStyle}>
              {({ opacity, scale }) =>
                <AbsoluteText
                  style={{
                    opacity,
                    transform: `scale(${scale})`
                  }}
                  left={'130px'}
                  bottom={'30vh'}>Story telling</AbsoluteText>
              }
            </Motion>


            <AbsoluteDiv
              top={'62vh'}
              right={'13vw'}>
              <RelativeDiv>
                <Motion style={progress > 50 ? activeStyle : inactiveStyle}>
                  {({ opacity, scale }) =>
                    <i
                      style={{
                        opacity,
                        transform: `scale(${scale})`,
                        fontSize: 30
                      }}
                      className="fa fa-music"></i>
                  }
                </Motion>
                <Motion style={progress > 53 ? {
                  ...activeStyle,
                  x: spring(0),
                  y: spring(0)
                } : {
                  ...inactiveStyle,
                  x: 38,
                  y: 27
                }}>
                  {({ opacity, scale, x, y }) =>
                    <AbsoluteText
                      style={{
                        opacity,
                        transform: `scale(${scale}) translate(${x}px, ${y}px)`,
                      }}
                      margin={'0'}
                      nowrap
                      top={'-27px'}
                      right={'38px'}>Kygo</AbsoluteText>
                  }
                </Motion>
                <Motion style={progress > 56 ? {
                  ...activeStyle,
                  x: spring(0),
                  y: spring(0)
                } : {
                  ...inactiveStyle,
                  x: 57,
                  y: -12
                }}>
                  {({ opacity, scale, x, y }) =>
                    <AbsoluteText
                      style={{
                        opacity,
                        transform: `scale(${scale}) translate(${x}px, ${y}px)`,
                      }}
                      margin={'0'}
                      nowrap
                      top={'12px'}
                      right={'57px'}>Ed Sheeran</AbsoluteText>
                  }
                </Motion>
                <Motion style={progress > 59 ? {
                  ...activeStyle,
                  x: spring(0),
                  y: spring(0)
                } : {
                  ...inactiveStyle,
                  x: 0,
                  y: -45
                }}>
                  {({ opacity, scale, x, y }) =>
                    <AbsoluteText
                      style={{
                        opacity,
                        transform: `scale(${scale}) translate(${x}px, ${y}px)`,
                      }}
                      margin={'0'}
                      nowrap
                      top={'45px'}
                      right={'0px'}>Cold Play</AbsoluteText>
                  }
                </Motion>
              </RelativeDiv>
            </AbsoluteDiv> */}
          </Container>
        }
      </Motion>
    );
  }
}

export default connect(
  (state) => ({ progress: state.loadingProgress.data }),
  {
    incrementProgress: increment,
    clearProgress: clear,
    completeProgress: complete,
    nearlyCompleteProgress: nearlyComplete
  }
)(LoadingPage);
