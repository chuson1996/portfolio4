import { Component, PropTypes } from 'react';

export default class ToggleState extends Component {
  static propTypes = {
    defaultState: PropTypes.bool,
    children: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      data: props.defaultState
    };
  }

  turnTrue = () => {
    this.setState({
      data: true
    });
  };

  turnFalse = () => {
    this.setState({
      data: false
    });
  };

  render() {
    return this.props.children({
      state: this.state.data,
      turnTrue: this.turnTrue,
      turnFalse: this.turnFalse
    });
  }
}
