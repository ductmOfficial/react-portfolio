import styled from 'styled-components';

export default styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--pallete-primary-lightest);
  background-color: transparent;
  color: ${({ isActive }) =>
    isActive ? 'var(--pallete-green)' : 'var(--pallete-secondary)'};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: var(--tab-width);
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--pallete-primary-lightest);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--pallete-primary-light);
  }
`;
