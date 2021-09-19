import styled from 'styled-components';

export default styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }
`;
