import styled from 'styled-components';

export default styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  margin-bottom: 30px;

  .folder {
    color: var(--pallete-green);
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .project-links {
    margin-right: -10px;
    color: var(--pallete-secondary-light);

    a {
      padding: 5px 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
