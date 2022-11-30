import React, { useState, useContext, useReducer } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import {
  Countbar,
  FirstPart,
  Image,
  Ratebar,
  Rated,
  Sizebar,
  Button,
  Hearticon,
  Buttons,
  SkuBar,
  SecondPart,
  ThirdPart,
} from './styled';
import { card, discription } from '../../../Mock/mock';
import GreenTitle from '../../generics/greenTitle/GreenTitle';
import CardFlower from '../../generics/Card/Card';
import { ActiveContext } from '../../../Context/index';

function Shoppage() {
  const counter = (state, action) => {
    switch (action.type) {
      case 'plus':
        if (state < 10) {
          localStorage.setItem('counter', state + 1);
          return state + 1;
        } else return state;

      case 'minus':
        if (state > 1) {
          localStorage.setItem('counter', state - 1);
          return state - 1;
        } else return state;
      default:
        return state;
    }
  };
  const [activee, setActivee] = useState(2);
  const [active, setActive] = useContext(ActiveContext);
  const [rcount, dispatch] = useReducer(
    counter,
    Number(localStorage.getItem('counter')) || 1
  );
  return (
    <div>
      <FirstPart>
        <FirstPart.ImgBar>
          <FirstPart.ImgBar.Imgs>
            {card[0].src.map((value) => (
              <Image key={value.id} src={value.src} />
            ))}
          </FirstPart.ImgBar.Imgs>
          <FirstPart.ImgBar.Img>
            <img alt='img' src={card[0].src[0].src} />
          </FirstPart.ImgBar.Img>
        </FirstPart.ImgBar>
        <FirstPart.DescriptionBar>
          <h2>{card[0].title}</h2>

          <Ratebar>
            <GreenTitle fontsize={'16px'} bold={'bold'}>
              ${card[0].price}.00
            </GreenTitle>

            <p>
              <Rated allowHalf defaultValue={4} />
              19 Customer Review
            </p>
          </Ratebar>
          <h4>Short Discription:</h4>
          <p className='description'>{card[0].description}</p>
          <h4>Size:</h4>
          <Sizebar>
            <Sizebar.Sizes
              onClick={() => setActivee(1)}
              className={` ${activee === 1 && 'activee'}`}
            >
              S
            </Sizebar.Sizes>
            <Sizebar.Sizes
              onClick={() => setActivee(2)}
              className={` ${activee === 2 && 'activee'}`}
            >
              M
            </Sizebar.Sizes>
            <Sizebar.Sizes
              onClick={() => setActivee(3)}
              className={` ${activee === 3 && 'activee'}`}
            >
              L
            </Sizebar.Sizes>
            <Sizebar.Sizes
              onClick={() => setActivee(4)}
              className={` ${activee === 4 && 'activee'}`}
            >
              XL
            </Sizebar.Sizes>
          </Sizebar>
          <Countbar>
            <Button onClick={() => dispatch({ type: 'minus' })}>-</Button>
            <Countbar.Count>
              {localStorage.getItem('counter') || rcount}
            </Countbar.Count>
            <Button onClick={() => dispatch({ type: 'plus' })}>+</Button>

            <Buttons>
              <Buttons.Buybtn>BUY NOW</Buttons.Buybtn>
              <Buttons.Addbtn>ADD TO CARD</Buttons.Addbtn>
              <Buttons.Heartbtn>
                <Hearticon />
              </Buttons.Heartbtn>
            </Buttons>
          </Countbar>

          <SkuBar>
            <SkuBar.p>
              SKU: <SkuBar.p.content> 1995751877966 </SkuBar.p.content>
            </SkuBar.p>
            <SkuBar.p>
              Categories: <SkuBar.p.content> Potter Plants </SkuBar.p.content>
            </SkuBar.p>
            <SkuBar.p>
              Tags: <SkuBar.p.content>Home, Garden, Plants </SkuBar.p.content>
            </SkuBar.p>
            <h4>
              Share this products: &nbsp;
              <FaFacebookF />
              &nbsp;&nbsp;
              <FaTwitter />
              &nbsp; &nbsp;
              <FaLinkedinIn />
              &nbsp; &nbsp;
              <FiMail />
            </h4>
          </SkuBar>
        </FirstPart.DescriptionBar>
      </FirstPart>
      <SecondPart>
        <SecondPart.Controller>
          <h3>Product Description</h3>
          <h3>Reviews (19)</h3>
        </SecondPart.Controller>
        <SecondPart.Review>
          {discription[0].title}
          <br />
          <br />
          {discription[1].title}
          <br />
          <br />
          <h4>Living Room:</h4>
          <br />
          {discription[2].title}
          <br />
          <br />
          <h4>Dining Room:</h4>
          <br />
          {discription[3].title}
          <br />
          <br />
          <h4>Office:</h4>
          <br />
          {discription[4].title}
        </SecondPart.Review>
      </SecondPart>
      <ThirdPart>
        <ThirdPart.Title>Releted Products</ThirdPart.Title>
        <ThirdPart.Product>
          <CardFlower width={228} height={250} value={card[0]} />
          <CardFlower width={228} height={250} value={card[0]} />
          <CardFlower width={228} height={250} value={card[0]} />
          <CardFlower width={228} height={250} value={card[0]} />
          <CardFlower width={228} height={250} value={card[0]} />
        </ThirdPart.Product>
        <ThirdPart.Toggle>
          <div
            onClick={() => setActive(1)}
            className={` ${active === 1 && 'active'}`}
          ></div>
          <div
            onClick={() => setActive(2)}
            className={` ${active === 2 && 'active'}`}
          ></div>
          <div
            onClick={() => setActive(3)}
            className={` ${active === 3 && 'active'}`}
          ></div>
        </ThirdPart.Toggle>
      </ThirdPart>
    </div>
  );
}

export default Shoppage;
