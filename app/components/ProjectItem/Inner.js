import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--pallete-primary-light);
  transition: var(--transition);
`;
