import styled from 'styled-components';

export default styled.div`
  width: max-content;
  max-width: 100px;
  transition: var(--transition);
  opacity: ${props => (props.isMounted ? 1 : 0)};

  svg {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: var(--pallete-green);
    fill: none;
    user-select: none;
    #B {
      opacity: 0;
    }
  }
`;
