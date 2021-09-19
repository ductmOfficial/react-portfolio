import styled from 'styled-components';

export default styled.a`
  ${({ theme }) => theme.mixins.smallButton};
  margin-left: 15px;
  font-size: var(--fz-xs);
`;
