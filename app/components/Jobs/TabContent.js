import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
  @media (max-width: 600px) {
    padding-left: 0;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 5px;
    font-size: var(--fz-xxl);
    font-weight: 500;

    .company {
      color: var(--pallete-green);
    }
  }

  .range {
    margin-bottom: 30px;
    color: var(--pallete-secondary-light);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;
