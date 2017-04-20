import styled from 'styled-components';
import { Fixed } from 'theme/grid';
import { Link } from 'react-router';
import { color3, color4 } from 'theme/variables';

export const Container = styled(Fixed)`
  right: 10vh;
  top: 35px;
  z-index: 99;
`;

export const StyledLink = styled(Link)`
  margin-left: 20px;
  position: relative;

  &:hover {
    color: ${color4};
  }

  &:hover::after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${color3};
    transform: scale(1.6, 2);
  }
`;
