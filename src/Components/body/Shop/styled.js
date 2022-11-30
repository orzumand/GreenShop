import styled from 'styled-components';
import { Rate } from 'antd';
import { ReactComponent as Heart } from '../../../Assets/images/heart.svg';
export const Hearticon = styled(Heart)`
  height: 20px;
  width: 18px;

  path {
    fill: #46a358;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    path {
      fill: red;
    }
  }
`;

export const FirstPart = styled.div`
  width: 100%;
  height: 505px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

FirstPart.ImgBar = styled.div`
  width: 573px;
  height: 448px;
  display: flex;
  justify-content: space-between;
`;
FirstPart.DescriptionBar = styled.div`
  width: 573px;
  height: 448px;
  .description {
    font-size: 14px;
  }
`;

FirstPart.ImgBar.Imgs = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

FirstPart.ImgBar.Img = styled.div`
  width: 444px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  background: #fbfbfb;
`;
export const Rated = styled(Rate)`
  font-size: 13px;
  padding-right: 4px;
`;

export const Ratebar = styled.div`
  display: flex;
  margin-bottom: 15px;

  justify-content: space-between;
  border-bottom: 1px solid grey;
`;
export const Sizebar = styled.div`
  display: flex;
  column-gap: 5px;
  .activee {
    color: #46a358;
    border: 1px solid #46a358;
  }
`;
Sizebar.Sizes = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid gray;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Countbar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Button = styled.button`
  border-radius: 50px;
  width: 25px;
  height: 33px;
  background-color: #46a358;
  :active {
    transform: translateY(1.5px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  caret-color: #46a358;
  border: 0px;
`;
Countbar.Count = styled.div`
  padding: 10px;
`;
export const Buttons = styled.div`
  display: flex;
`;

Buttons.Buybtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 35px;
  background-color: #46a358;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  margin-left: 26px;
  margin-right: 10px;
  :active {
    transform: translateY(1.5px);
  }
`;

Buttons.Addbtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 35px;
  margin-right: 10px;
  border: 1px solid #46a358;
  color: #46a358;
  border-radius: 6px;
  cursor: pointer;
  :active {
    transform: translateY(1.5px);
  }
`;

Buttons.Heartbtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 1px solid #46a358;
  color: #46a358;
  border-radius: 6px;
  cursor: pointer;
  :active {
    transform: translateY(1.5px);
  }
`;
export const SkuBar = styled.div`
  margin-top: 25px;
`;
SkuBar.p = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
`;
SkuBar.p.content = styled.div`
  display: inline;
`;
export const SecondPart = styled.div`
  width: 100%;
  margin-bottom: 120px;
  margin-top: 96px;
  h4 {
    margin-bottom: 0px;
  }
`;
SecondPart.Controller = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  margin-bottom: 20px;
`;
SecondPart.Review = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
export const ThirdPart = styled.div`
  width: 100%;
  height: 600px;
`;

ThirdPart.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #46a358;
  margin-bottom: 60px;
`;
ThirdPart.Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
  margin-bottom: 30px;
`;
ThirdPart.Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 7px;
  .active {
    background-color: green;
  }
  div {
    border: 1px solid green;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;
