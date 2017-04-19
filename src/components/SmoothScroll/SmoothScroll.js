import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { hashHistory } from 'react-router';

class ManualScroll extends Component{
  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, Math.round(nextProps.scrollY));
  }

  render() {
    return <span></span>
  }
}

export default class SmoothScroll2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };


    this.onmousewheel = this.onmousewheel.bind(this);
    this.ontouchstart = this.ontouchstart.bind(this);
    this.ontouchmove = this.ontouchmove.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.onkeyup = this.onkeyup.bind(this);
  }

  componentDidMount() {
    this.pinY = window.scrollY;

    window.addEventListener('wheel', this.onmousewheel);
    window.addEventListener('keydown', this.onkeydown);
    window.addEventListener('keydown', this.onkeyup);

    hashHistory.listen(() => {
      window.scrollTo(0, 0);
      this.setState({
        scrollY: 0
      });
    });
    // window.addEventListener('touchmove', this.ontouchmove);
    // window.addEventListener('touchstart', this.ontouchstart);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onmousewheel);
    window.removeEventListener('keydown', this.onkeydown);
    window.removeEventListener('keydown', this.onkeyup);
    // window.removeEventListener('touchmove', this.ontouchmove);
    // window.removeEventListener('touchstart', this.ontouchstart);
  }

  stayInRange(min, max, value) {
    return Math.min(max, Math.max(min, value));
  }

  move(deltaY) {
    if (document.querySelector('html').style.overflowY === 'hidden') {
      return ;
    }
    this.setState(({ scrollY }) => ({
      scrollY: this.stayInRange(
        0,
        document.body.offsetHeight - window.innerHeight,
        scrollY + deltaY
      )
    }));
  }

  onkeydown(e) {
    if (e.target === document.body && e.key === 'ArrowDown') {
      e.preventDefault();
      this.move(20);
    }
  }

  onkeyup(e) {
    if (e.target === document.body && e.key === 'ArrowUp') {
      e.preventDefault();
      this.move(-20);
    }
  }

  onmousewheel(e) {
    if (this.container.contains(e.target) || e.target === this.container) {
      e.preventDefault();
      this.move(e.deltaY);
    }
  }

  ontouchstart(e) {
    this.pinY = e.layerY;
  }

  ontouchmove(e) {
    if (this.container.contains(e.target) || e.target === this.container) {
      e.preventDefault();
      const deltaY = this.pinY - e.layerY;
      this.move(deltaY * 2);
    }
    this.pinY = e.layerY;
  }

  render() {
    const { scrollY } = this.state;
    return (
      <div ref={(elem) => this.container = elem}>
        <Motion style={{ scrollY: spring(scrollY)}}>
          {({ scrollY }) =>
            <ManualScroll scrollY={scrollY}></ManualScroll>}
        </Motion>
        {this.props.children}
      </div>
    );
  }
}
