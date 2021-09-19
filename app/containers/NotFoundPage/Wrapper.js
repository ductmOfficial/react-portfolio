import styled from 'styled-components';

export default styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
