import React, { Component } from 'react';

export function whenLeaving(oldProps, newProps) {
  return (doSomething) => {
    if (newProps.leaving && !oldProps.leaving) {
      doSomething();
      newProps.leave();
    }
  }
}

export function whenAppearing(oldProps, newProps) {
  return (doSomething) => {
    if (newProps.appearing && !oldProps.appearing) {
      doSomething();
      newProps.appear();
    }
  }
}

export function whenEntering(oldProps, newProps) {
  return (doSomething) => {
    if (newProps.entering && !oldProps.entering) {
      doSomething();
      newProps.enter();
    }
  }
}

export default function(Child) {
  return class TransitionFinalize extends Component {
    constructor(props) {
      super(props);
      this.state = {
        leaving: false,
        willLeaveCallback: null
      };
    }

    componentWillLeave(callback) {
      const _callback = () => {
        callback();
        this.setState({ leaving: false });
      }

      this.setState({
        leaving: true,
        leave: _callback
      });
    }

    componentWillAppear(callback) {
      const _callback = () => {
        callback();
        this.setState({ appearing: false });
      }

      this.setState({
        appearing: true,
        appear: _callback
      });
    }

    componentWillEnter(callback) {
      const _callback = () => {
        callback();
        this.setState({ entering: false });
      }
      
      this.setState({
        entering: true,
        enter: _callback
      });
    }

    render() {
      return <Child
        ref={(elem) => {this.child = elem}}
        {...this.props} {...this.state}/>
    }
  };
}