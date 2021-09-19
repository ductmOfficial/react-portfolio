import styled from 'styled-components';

export default styled.div`
  color: var(--pallete-secondary-light);
  font-size: 17px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
