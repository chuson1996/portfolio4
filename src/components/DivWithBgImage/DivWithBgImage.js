import React from 'react';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import { Div } from 'theme/grid';

const DivWithBgImage = lifecycle({
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad({ loading: true });
      const image = new Image();
      image.src = this.props.backgroundImageUrl;
      image.onload = () => {
        this.props.onLoad({ loading: false });
      };
    }
  }
})(function ({onLoad, backgroundImageUrl, ...rest}) {
  return <Div {...rest}/>;
});

DivWithBgImage.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  onLoad: PropTypes.func
};

export default DivWithBgImage;