import styled from 'styled-components';

export default styled.h2`
  display: block;
  margin-bottom: 20px;
  color: var(--pallete-green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fz-sm);
  }

  &:after {
    display: none;
  }
`;
