import styled from 'styled-components';
import Inner from './Inner';

export default styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;

    ${Inner} {
      transform: translateY(-5px);
    }
  }
`;
