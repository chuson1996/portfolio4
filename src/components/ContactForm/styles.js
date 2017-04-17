import styled, { css } from 'styled-components';
import { color1, color3, normalFontFamily, normalFontSize } from 'theme/variables';
import { Flex } from 'theme/grid';
import media from 'theme/media';

export const Row = styled(Flex)`
  width: 100%;
  ${media.tablet`
    flex-direction: column;
    margin-bottom: 0;
  `}
`;

const placeholder = (...args) => css`
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    ${css(...args)}
  }
  &::-moz-placeholder { /* Firefox 19+ */
    ${css(...args)}
  }
  &:-ms-input-placeholder { /* IE 10+ */
    ${css(...args)}
  }
  &:-moz-placeholder { /* Firefox 18- */
    ${css(...args)}
  }
`;

export const Form = styled.form`
  position: relative;
  border: 19px solid ${color1};
  padding: 40px 70px;

  ${media.tablet`
    padding: 20px 0;
  `}

  &.hide::after {
    width: 100%;
  }
  &::after {
    content: ' ';
    width: 0%;
    height: 100%;
    background-color: ${color1};
    position: absolute;
    left: 0;
    top: 0;
    transition: 1s width;
  }

  input,
  textarea {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid ${color1};
    font-family: ${normalFontFamily};
    font-size: ${normalFontSize};
    color: ${color1};

    -webkit-appearance: none;
    border-radius: 0;

    width: 100%;

    &:focus {
      outline: 0;
    }

    ${placeholder`
      color: ${color1};
    `}

    &.invalid {
      ${placeholder`
        color: ${color3};
      `}
      border-bottom: 2px solid ${color3};
    }

    ${media.tablet`
      margin-bottom: 30px;
    `}
  }

  textarea {
    overflow: hidden;
    padding: 0 0 10px 0;
  }

  .submitBtn {
    font-size: 2em;
  }
`;
