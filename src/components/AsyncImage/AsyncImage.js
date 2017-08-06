import { registerItem, doneLoading, deregisterItem } from 'redux/modules/loadingStatus';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
  null,
  {
    registerItem,
    deregisterItem,
    doneLoading
  }
)(class _AsyncImage extends Component {
  componentDidMount() {
    this.props.registerItem(this.props.src);
  }

  componentWillUnmount() {
    this.props.deregisterItem(this.props.src);
  }

  render() {
    const { doneLoading, registerItem, deregisterItem, src, ...rest } = this.props;
    return (
      <img onLoad={() => doneLoading(src)} src={src} {...rest}/>
    );
  }
});