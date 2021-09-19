import styled from 'styled-components';

export default styled.h1`
  ${({ theme }) => theme.mixins.bigHeading};
`;
