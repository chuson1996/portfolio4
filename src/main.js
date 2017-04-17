import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducer from 'redux/modules/reducer';
import 'theme/globalStyles';
import createRoutes from './routes';
// import scrollInitiate from './scroll';
import { loadTracks, middleware as audiosMiddleware } from 'redux/modules/audios';
import clientMiddleware from 'redux/middlewares/clientMiddleware';

// require("font-awesome-webpack");

const middleware = [
  routerMiddleware(hashHistory),
  audiosMiddleware,
  clientMiddleware()
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(applyMiddleware(...middleware))
);

// if (__DEVELOPMENT__ && module.hot) {
//   module.hot.accept('redux/modules/reducer', () => {
//     store.replaceReducer(require('redux/modules/reducer'));
//   });
// }

// scrollInitiate(store);
loadTracks(store);

const history = syncHistoryWithStore(hashHistory, store);

hashHistory.listen((location) => {
  window.scrollTo(0, 0);
});

export default class Main extends React.Component {
  render() {
    return (
       <Provider store={store}>
        {createRoutes(store, history)}
      </Provider>
    );
  }
}