import styled from 'styled-components';

export default styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;
