import styled from 'styled-components';
import { ReactComponent as Search } from '../../../Assets/images/search.svg';
import { ReactComponent as Heart } from '../../../Assets/images/heart.svg';
import { ReactComponent as Shop } from '../../../Assets/images/shop.svg';
export const Card = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '250px')};
  height: ${({ height }) => (height ? `${height}px` : '300px')};
  background: #fbfbfb;
  margin: 34px 4px 19px 4px;

  .group {
    visibility: hidden;
    align-items: center;
    column-gap: 150px;
    transition: all 0.5s;
  }
  :hover {
    .group {
      height: 35px;
      visibility: visible;

      column-gap: 26px;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
  height: ${({ width }) => (width ? `${width}px` : '250px')};
`;
Card.Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 26px;
  margin-bottom: 15px;
  width: 100%;
  height: 35px;
`;

export const Searchicon = styled(Search)`
  height: 19px;
  width: 19px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: #46a358;
    }
  }
`;
export const Hearticon = styled(Heart)`
  height: 20px;
  width: 18px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: red;
    }
  }
`;

export const Shopicon = styled(Shop)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: #46a358;
    }
  }
`;
