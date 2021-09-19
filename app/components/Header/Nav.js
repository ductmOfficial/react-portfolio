import styled from 'styled-components';

export default styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--pallete-secondary-lightest);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--pallete-green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--pallete-green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;
