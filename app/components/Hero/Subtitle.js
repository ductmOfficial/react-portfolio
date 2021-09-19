import styled from 'styled-components';

export default styled.h3`
  ${({ theme }) => theme.mixins.bigHeading};

  margin-top: 10px;
  color: var(--pallete-secondary);
  line-height: 0.9;
`;
