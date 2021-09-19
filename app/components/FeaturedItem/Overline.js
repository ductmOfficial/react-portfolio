import styled from 'styled-components';

export default styled.p`
  margin: 10px 0;
  color: var(--pallete-green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;

  &:last-child,
  &:last-of-type {
    margin: 0.5rem 0;
  }
`;
