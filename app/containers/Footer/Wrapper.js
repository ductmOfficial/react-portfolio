import styled from 'styled-components';

const Wrapper = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};

  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export default Wrapper;
