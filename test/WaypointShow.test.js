import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import WaypointShow from 'components/WaypointShow/WaypointShow';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('WaypointShow', function() {

  it('should have a paragraph', function() {
    const wrapper = shallow(
      <WaypointShow>
        {({ show }) => <p>{ show ? 1 : 0}</p>}
      </WaypointShow>
    );
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should show "1" when in view', function() {
    const onLeaveSpy = sinon.spy();
    const onEnterSpy = sinon.spy();
    const wrapper = mount(
      <div>
        <WaypointShow
          bottomOffset={0}
          onEnter={onEnterSpy}
          onLeave={onLeaveSpy}>
          {({ show }) => <p>{ show ? 1 : 0}</p>}
        </WaypointShow>
      </div>
    );

    wrapper.find('span').get(0).getBoundingClientRect = function() {
      return {
        top: 768,
        left: 0,
        height: 0
      };
    }

    window.dispatchEvent(new window.UIEvent('scroll', { detail: 10 }));

    expect(onEnterSpy.calledOnce).toEqual(true);
    expect(onLeaveSpy.calledOnce).toEqual(false);

    expect(wrapper.find('p').text()).toEqual("1");
  });

  it('should show "0" when out of view', function() {
    const onLeaveSpy = sinon.spy();
    const onEnterSpy = sinon.spy();
    const wrapper = mount(
      <div>
        <WaypointShow
          bottomOffset={0}
          onEnter={onEnterSpy}
          onLeave={onLeaveSpy}>
          {({ show }) => <p>{ show ? 1 : 0}</p>}
        </WaypointShow>
      </div>
    );

    wrapper.find('span').get(0).getBoundingClientRect = function() {
      return {
        top: 2000,
        left: 0,
        height: 0
      };
    }

    window.dispatchEvent(new window.UIEvent('scroll', { detail: 10 }));

    expect(onEnterSpy.calledOnce).toEqual(false);
    expect(onLeaveSpy.calledOnce).toEqual(false);

    expect(wrapper.find('p').text()).toEqual("0");


    // Simulate: Scroll up
    wrapper.find('span').get(0).getBoundingClientRect = function() {
      return {
        top: 100,
        left: 0,
        height: 0
      };
    }

    window.dispatchEvent(new window.UIEvent('scroll', { detail: 10 }));

    expect(onEnterSpy.calledOnce).toEqual(true);
  });
});