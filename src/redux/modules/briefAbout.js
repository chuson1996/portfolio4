const NEXT = 'briefAbout/NEXT';

export function next() {
  return { type: NEXT };
}

export default function reducer(state = 0, action) {
  switch (action.type) {
    case NEXT:
      return state + 1;
    default:
      return state;
  }
}