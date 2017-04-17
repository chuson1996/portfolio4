const ENABLE_SCROLLING = 'scroll/ENABLE_SCROLLING';
const DISABLE_SCROLLING = 'scroll/DISABLE_SCROLLING';

export function enableScrolling() {
  document.querySelector('html').style.overflow = 'initial';
  return { type: ENABLE_SCROLLING };
}

export function disableScrolling() {
  document.querySelector('html').style.overflow = 'hidden';
  return { type: DISABLE_SCROLLING };
}

export function reducer(state = true, action) {
  switch (action.type) {
    case ENABLE_SCROLLING:
      return true;
    case DISABLE_SCROLLING:
      return false;
    default:
      return state;
  }
}

export default function scroll(store) {
  store.subscribe(() => {
    const scrollingEnabled = store.getState().scroll;

    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        scrollingEnabled && handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    var goUp = true;
    var end = null;
    var interval = null;

    function handle(delta) {
      var animationInterval = 20; //lower is faster
      var scrollSpeed = 20; //lower is faster

      if (end == null) {
        end = window.scrollY;
      }
      end -= 20 * delta;
      goUp = delta > 0;

      if (interval == null) {
        interval = setInterval(function () {
          var scrollTop = window.scrollY;
          var step = Math.round((end - scrollTop) / scrollSpeed);
          if ((scrollTop <= 0) ||
              (goUp && step > -1 )||
              (!goUp && step < 1) ) {
            clearInterval(interval);
            interval = null;
            end = null;
          }
          window.scrollTo(0, scrollTop + step);
        }, animationInterval);
      }
    }
  });
}
