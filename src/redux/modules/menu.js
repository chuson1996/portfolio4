const OPEN = 'menu/OPEN';
const CLOSE = 'menu/CLOSE';

export function open() {
  return { type: OPEN };
}

export function close() {
  return { type: CLOSE };
}

export default function reducer(state = false, action) {
  switch(action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
}