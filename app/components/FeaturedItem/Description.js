import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => theme.mixins.boxShadow};

  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--pallete-primary-light);
  color: var(--pallete-secondary-light);
  font-size: var(--fz-lg);

  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
