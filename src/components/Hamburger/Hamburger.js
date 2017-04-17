import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { menuBackground, backgroundColor } from '../../theme/variables';
import { Motion, spring } from 'react-motion';
import { open as openMenu, close as closeMenu } from '../../redux/modules/menu';
import SimpleStaggeredMotion from 'components/SimpleStaggeredMotion/SimpleStaggeredMotion';

const Line = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  background-color: ${menuBackground};
  margin-bottom: 5px;
`;

const Relative = styled.div`
  position: relative;
`;

const AbsoluteLine = styled(Line)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${backgroundColor};
`;

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 40px;
  cursor: pointer;
  z-index: 99;
`;

class Hamburger extends Component {
  render() {
    const {menuOpen, progress, openMenu, closeMenu} = this.props;
    return (
      <Motion style={progress === 100 ? { opacity: spring(1) } : { opacity: (0) }}>
        {({ opacity }) =>
          <SimpleStaggeredMotion
            length={3}
            defaultStyle={{width: 0}}
            style={menuOpen ? { width: spring(100) } : {width: spring(0) }}>
            {styles =>
              <Container
                onClick={menuOpen ? closeMenu : openMenu}
                style={{
                  opacity,
                  pointerEvents: progress === 100 ? 'initial' : 'none'
                }}>
                {styles.map(({ width }, i) =>
                  <Relative key={i}>
                    <Line/>
                    <AbsoluteLine style={{
                      width: `${width}%`
                    }}/>
                  </Relative>
                )}
              </Container>
            }
          </SimpleStaggeredMotion>
        }
      </Motion>
    );
  }
}

export default connect(
  (state) => ({
    menuOpen: state.menu,
    progress: state.loadingProgress.data
  }),
  {
    openMenu,
    closeMenu
  }
)(Hamburger);
