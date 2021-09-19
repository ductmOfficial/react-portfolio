import styled from 'styled-components';

export default styled.h1`
  margin: 0 0 30px 4px;
  color: var(--pallete-green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
`;
