import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  font-family: var(--font-mono);
  font-size: var(--fz-sm);

  &:after {
    bottom: 0.1em;
  }
`;
