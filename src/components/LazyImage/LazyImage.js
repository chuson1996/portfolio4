import React from 'react';
import { lifecycle, compose, withState, withHandlers } from 'recompose';


export default compose(
  withState('loading', 'updateLoading', false),
  withHandlers({
    changeLoadingStatus: ({ updateLoading, onLoadStatusChange }) => (value) => {
      updateLoading(() => value);
      onLoadStatusChange({loading: value});
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.changeLoadingStatus(true);
    },
    componentWillReceiveProps(nextProps) {
      if (this.props.src !== nextProps.src) {
        this.props.changeLoadingStatus(true);
      }
    }
  })
)(function LazyImage({ src, updateLoading, loading, onLoad, onLoadStatusChange, changeLoadingStatus, ...rest }) {
  return (
    <img
      src={src}
      onLoad={(e) => {
        if (onLoad) onLoad(e);
        changeLoadingStatus(false);
      }}
      {...rest}
    />
  );
})
