import styled from 'styled-components';

export default styled.h3`
  color: var(--pallete-secondary-lightest);
  font-size: clamp(24px, 5vw, 28px);

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    color: var(--pallete-white);
  }
`;
