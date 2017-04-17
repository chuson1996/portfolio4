import /* React,  */{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { playTrack, pauseTrack } from 'redux/modules/audios';

class AudioPlayer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    trackId: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      duration: 0,
      currentTime: 0
    };
  }

  play = () => {
    const { playTrack, trackId } = this.props;
    playTrack(trackId);
  };

  pause = () => {
    const { pauseTrack, trackId } = this.props;
    pauseTrack(trackId);
  };

  componentWillUnmount() {
    this.pause();
  }

  render() {
    const { audios, trackId } = this.props;
    return (
      this.props.children({
        play: this.play,
        pause: this.pause,
        playing: audios[trackId].playing,
        duration: audios[trackId].duration,
        currentTime: audios[trackId].currentTime
      })
    );
  }
}

export default connect(
  (state) => ({
    audios: state.audios
  }),
  {
    playTrack,
    pauseTrack
  }
)(AudioPlayer);
