import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: var(--pallete-secondary-light);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    li {
      margin: 0 10px 5px 0;
      color: var(--pallete-secondary-lightest);
    }
  }
`;
