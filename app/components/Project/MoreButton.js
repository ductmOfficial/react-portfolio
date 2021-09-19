import styled from 'styled-components';

export default styled.button`
  ${({ theme }) => theme.mixins.button};
  margin: 80px auto 0;
`;
