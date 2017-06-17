import { lifecycle, compose } from 'recompose';
import { registerItem, doneLoading, deregisterItem } from 'redux/modules/loadingStatus';
import { connect } from 'react-redux';

const asyncImageEnhance = (key) => (renderComponent) => {
  return compose(
    connect(
      null,
      {
        registerItem,
        deregisterItem,
        doneLoading
      }
    ),
    lifecycle({
      componentDidMount() {
        this.props.registerItem(key);
      },
      componentWillUnmount() {
        this.props.deregisterItem(key);
      }
    })
  )(({ doneLoading, registerItem, deregisterItem, ...rest }) => renderComponent({
    doneLoading: () => doneLoading(key),
    ...rest
  }));
}

export default asyncImageEnhance;
