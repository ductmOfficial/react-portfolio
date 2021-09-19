import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }

  a {
    width: 100%;
    background-color: var(--pallete-green);
    border-radius: var(--border-radius);
    vertical-align: middle;

    &:hover,
    &:focus {
      background: transparent;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--pallete-primary);
      mix-blend-mode: screen;
    }
  }

  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    max-width: 100%;

    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(80%);
    }
  }
`;
