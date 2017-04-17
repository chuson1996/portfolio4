import React, { Component, PropTypes } from 'react';

export default class BreakParagraph extends Component {
  static propTypes = {
    paragraph: PropTypes.string.isRequired,
    renderPlaceholder: PropTypes.func.isRequired,
    renderLines: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.spans = [];
    this.state = {
      breakParagraph: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.breakPara();
    });
    // // window.onresize = () => setTimeout(() => this.breakPara());
    this.listener = () => this.breakPara();
    window.addEventListener('resize', this.listener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
  }

  breakPara() {
    let lines = [];
    let tops = [];
    // console.log(this.spans)

    this.spans.forEach((span, i) => {
      const _offsetTop = span.offsetTop;
      let topIndex = tops.indexOf(_offsetTop);
      if (topIndex > -1) {
        if (!lines[topIndex]) lines[topIndex] = [];
      } else {
        topIndex = tops.length;
        tops[tops.length] = _offsetTop;
        if (!lines[topIndex]) lines[topIndex] = [];
      }

      if (span.innerText) {
        lines[topIndex].push(span.innerText.trim());
      }
    });

    lines = lines.map(line => line.join(' '));
    // console.log(lines);

    this.setState({
      breakParagraph: true,
      lines
    });
  };

  setSpanRef(i) {
    return (elem) => this.spans[i] = elem;
  }

  render() {
    const { breakParagraph, lines } = this.state;
    const { paragraph, renderPlaceholder, renderLines } = this.props;

    const spans = paragraph
      .split(' ')
      .map((word, i) => <span
        style={{ pointerEvents: 'none' }}
        key={i}
        ref={this.setSpanRef(i).bind(this)}>{word + ' '}</span>);

    return (
      <div style={{
        width: '100%',
        position: 'relative',
        padding: 0
      }}>
        <div style={{
          opacity: 0,
          position: 'absolute',
          width: '100%'
        }}>
          {renderPlaceholder(spans)}
        </div>
        { breakParagraph && renderLines(lines) }
      </div>
    );
  }
}
