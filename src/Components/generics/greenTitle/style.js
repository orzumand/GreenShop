import styled from 'styled-components';

export const Title = styled.span`
  color: ${({ color }) => (color ? color : '#46a358')};
  font-weight: ${({ bold }) => (bold ? bold : '')};
  font-size: ${({ fontsize }) => (fontsize ? fontsize : '')};
`;
