const PLAY = 'audios/PLAY';
const PAUSE = 'audios/PAUSE';
const LOAD = 'audios/LOAD';
const UPDATE_CURRENT_TIME = 'audios/UPDATE_CURRENT_TIME';

const tracks = [
  new Audio(require('assets/dreams.mp3')),
  new Audio(require('assets/youth.mp3')),
  new Audio(require('assets/kontinuum.mp3')),
  new Audio(require('assets/chuhoangson.mp3'))
];

export function loadTracks(store) {
  tracks.forEach((track, i) => {
    track.oncanplaythrough = () => {
      store.dispatch(loadTrack(i, track.duration));
    };
  });
}

export function playTrack(trackIndex) {
  tracks.forEach((track) => {
    track.currentTime = 0;
    track.pause();
  });
  tracks[trackIndex].play();
  return { type: PLAY, trackIndex };
}

export function pauseTrack(trackIndex) {
  tracks[trackIndex].pause();
  tracks[trackIndex].currentTime = 0;
  return { type: PAUSE, trackIndex };
}

export function loadTrack(trackIndex, duration) {
  return {
    type: LOAD,
    trackIndex,
    data: {
      duration
    }
  };
}

export function updateCurrentTime(trackIndex, newCurrentTime) {
  return {
    type: UPDATE_CURRENT_TIME,
    trackIndex,
    currentTime: newCurrentTime
  }
}

let interval;
export const middleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === PLAY) {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      const {currentTime, duration} = store.getState().audios[action.trackIndex];
      if (currentTime >= duration) {
        clearInterval(interval);
        return;
      }
      store.dispatch(updateCurrentTime(
        action.trackIndex,
        currentTime + 1
      ));
    }, 1000);
  }
  if (action.type === PAUSE) {
    if (interval) clearInterval(interval);
  }
  return result;
};

const initialState = tracks.map((track, i) => {
  return {
    playing: false,
    duration: 0,
    currentTime: 0
  };
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PLAY:
      return state.map((track, i) => {
        if (i === action.trackIndex)
          return {
            ...track,
            playing: true,
            currentTime: 0
          };
        return { ...track, playing: false, currentTime: 0 };
      });
    case PAUSE:
      return state.map((track, i) => {
        return { ...track, playing: false, currentTime: 0 };
      });
    case LOAD:
      return state.map((track, i) => {
        if (i === action.trackIndex)
          return { ...track, duration: action.data.duration };

        return track;
      });
    case UPDATE_CURRENT_TIME:
      return state.map((track, i) => {
        if (i === action.trackIndex)
          return { ...track, currentTime: action.currentTime};

        return track;
      });
    default:
      return state;
  }
}