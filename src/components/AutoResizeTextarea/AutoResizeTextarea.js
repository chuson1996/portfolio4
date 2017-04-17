import React, { Component, PropTypes } from 'react';
import c from 'classnames';

export default class AutoResizeTextarea extends Component {
  static propTypes = {
    input: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      height: '1em'
    };
  }

  delayedResize = () => {
    setTimeout(this.resize, 0);
  };

  resize = () => {
    this.setState({
      height: 'auto'
    });
    this.setState({ height: `${this.elem.scrollHeight}px` })
  };

  render() {
    const { input: { onChange, ...otherInputProps }, meta, placeholder, ...others } = this.props;

    return (
      <textarea
        placeholder={`${placeholder + ((meta.touched && meta.error && ` (${meta.error})`) || '')}`}
        className={c({ 'invalid': meta.invalid && meta.touched })}
        ref={(elem) => this.elem = elem}
        style={{height: this.state.height}}
        onCut={this.delayedResize}
        onPaste={this.delayedResize}
        onDrop={this.delayedResize}
        onKeyDown={this.delayedResize}
        onChange={(e) => {
          this.resize();
          onChange(e);
        }}
        {...otherInputProps}
        rows="1"
        {...others}></textarea>
    );
  }
}
