import React from 'react';
import BreakParagraph from 'components/BreakParagraph/BreakParagraph';
import { mount } from 'enzyme';
import sinon from 'sinon';
// import renderer from 'react-test-renderer';

jest.useFakeTimers();

describe('react-break-paragraph', function () {
  let wrapper,
    text = 'This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text.',
    testComponent;


  sinon.spy(BreakParagraph.prototype, 'componentDidMount');
  BreakParagraph.prototype.setSpanRef = function(i) {
    return function(elem) {
      this.spans[i] = {
        offsetTop: 0,
        innerText: text.split(' ')[i]
      };
    };
  };

  beforeEach(function() {
    testComponent = (
      <BreakParagraph
        renderPlaceholder={(children) => <h1 className="placeholder">{children}</h1>}
        renderLines={(lines) => <h1>
          {lines.map((line, i) => <span className="line" key={i}>{line}</span>)}
        </h1>}
        paragraph={text}
      />
    );

    wrapper = mount(testComponent);
  });

  afterEach(function() {
    jest.runAllTimers();
    wrapper.unmount();
  });

  it('should call breakPara right after mounted', function() {
    // console.log(BreakParagraph.prototype.breakPara)
    sinon.spy(BreakParagraph.prototype, 'breakPara');
    jest.runAllTimers();
    expect(BreakParagraph.prototype.breakPara.called).toEqual(true);
  });

  it('shoud render', function() {
    expect(wrapper.text().trim()).toEqual(text);
  });

  it('should have at least 1 line', function() {
    jest.runAllTimers();
    expect(wrapper.state().breakParagraph).toBe(true);
    expect(wrapper.find('.line').length).toEqual(1);
  });

  it('should call breakPara when window is resized', function() {
    // sinon.spy(BreakParagraph.prototype, 'breakPara');
    jest.runAllTimers();
    const beforeResizeCount = BreakParagraph.prototype.breakPara.callCount;

    expect(BreakParagraph.prototype.breakPara.callCount).toEqual(beforeResizeCount);
    window.dispatchEvent(new Event('resize'));

    expect(BreakParagraph.prototype.breakPara.callCount).toEqual(beforeResizeCount + 1);
  });
})