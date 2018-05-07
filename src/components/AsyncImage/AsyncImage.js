import { registerItem, doneLoading, deregisterItem } from 'redux/modules/loadingStatus';
import React, { Component } from 'react';
import omit from 'lodash/omit';
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
    const { doneLoading, src } = this.props;
    const rest = omit(this.props, ['doneLoading', 'registerItem', 'deregisterItem', 'src']);
    return (
      <img onLoad={() => doneLoading(src)} src={src} {...rest} role="presentation"/>
    );
  }
});
