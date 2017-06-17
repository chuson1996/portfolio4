import React from 'react';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import { Div } from 'theme/grid';

const DivWithBgImage = lifecycle({
  componentDidMount() {
    if (this.props.onLoadStatusChange) {
      this.props.onLoadStatusChange({ loading: true });
      const image = new Image();
      image.src = this.props.backgroundImageUrl;
      image.onload = () => {
        this.props.onLoadStatusChange({ loading: false });
      };
    }
  }
})(function ({onLoadStatusChange, backgroundImageUrl, ...rest}) {
  return <Div {...rest}/>;
});

DivWithBgImage.defaultProps = {
  backgroundImageUrl: PropTypes.string.isRequired,
  onLoadStatusChange: PropTypes.func
};

export default DivWithBgImage;