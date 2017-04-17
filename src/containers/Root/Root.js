import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createRoutes from 'routes';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        {createRoutes(this.props.store, this.props.history)}
      </Provider>
    );
  }
}

export default Root;