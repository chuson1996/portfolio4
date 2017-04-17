const INCREMENT = 'progress/INCREMENT';
const COMPLETE = 'progress/COMPLETE';
const NEARLY_COMPLETE = 'progress/NEARLY_COMPLETE';
const CLEAR = 'progress/CLEAR';

export function increment(amount) {
  if (typeof amount !== 'number') throw new Error('amount must be a number');
  return {
    type: INCREMENT,
    data: amount
  };
}

export function complete(amount) {
  return {
    type: COMPLETE,
    data: amount
  };
}

export function nearlyComplete(amount) {
  return {
    type: NEARLY_COMPLETE,
    data: amount
  };
}

export function clear() {
  return { type: CLEAR };
}

export default function reducer(state = { data: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { data: state.data + action.data };
    case NEARLY_COMPLETE:
      return { data: 99 };
    case COMPLETE:
      return { data: 100 };
    case CLEAR:
      return { data: 0 };
    default:
      return state;
  }
}
